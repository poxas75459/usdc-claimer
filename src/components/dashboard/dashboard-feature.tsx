/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "2QTeBzp29sG9sdMZBxYutM2fiYTk7X2Ust2m7PS8Q7mvXVZVZp7uAsr4ftSZH6P1FcYxGjS76ooVoSWPVwgZQt3F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5iydZZTjZ727dLuQLEivf4tJ6UPdHxVCRfi7gT19zWiaA3PgmcbdwjETDjpTrkFzNw8wAKwVo2svuJ5gsUmBGYZ5",
  "key1": "sNfP48pPZnpB2BTvibVchNi8WcDH65pumVuXMnfpvcHAXxMaAQvaFsJVaDtcCHLiZPbe1z5ECqSAmKH627hYCrq",
  "key2": "52oS3tJM4BN49TbQ4TiotnyZt33YVgBhpFyyode65cbuT6qK7bfT1BiMiErzCTn8Lwmt4KcfgpzKboXuax9oD9Mw",
  "key3": "5y2kq674nayHCohHHa6P6aMTHDBmdmq3vWFXFmQCgTVfwQVC5E6cbDi2D9J1QJxJRLJH9ZsSdNVyVtgdKtFRXE3h",
  "key4": "4QaC4DGRWKdccmQJgi1zBzSRGrVBVdC4SCCHqZaW3XqxsyMdxq2kRLUVcJh6BMxr5KLNLW2W4XQeg1TdZRS6bYU2",
  "key5": "4ZKwqiXgsJgtsWQSeNX1K4md22FJiTjn7FhAFmmXiQ9sHcmL3xsdQyL6BBTMqoEvNk4d5tEUa457BehouXpgjwvK",
  "key6": "HykReJpugNFe8vryjtcXW97yiGhAeQMFKjCrs8RZtYkJiUBrtxBpmDWU4CxGHx1qZ8h7BRu8KH8mBZ5BkKGXJK5",
  "key7": "2kyF13YUHxoq45beikxiFJHuXc375qTdS9zovmX5VLxgHgt5fBnfFa5up2f2gmT7jiFpPxLATu4vLcQ8apmz13cK",
  "key8": "2DfVGreKDxZ4kRGaZiJZRMzeauJXk2N5Jkhd4ZfYjfFTyqdiWLoUNxfjwHEu2bYQR521FzunYLsfC1gGDdRhzrbB",
  "key9": "Nyw4nVPbJLL3gRtYApQAkyyzZ87FQQUQ9oQz2wZg1B2pjqRAzxtDo4QxyyjsXwAmWXxZTS7zCmmW6Egujt9FUyS",
  "key10": "DDTXmTCrr4hsFA7xPKR5buQBu1Rdx1hG7JjevrFc6Bprunccs7Ag3hk45YHqvu7fVg26cqqGpBmfmiCY8MDbJR6",
  "key11": "QY1ZM29UDWzh7ypweqtmLETEMYMcVvorVmQA1r87TtZoFo6qhgDyfspSPRKFx9osgRChfjR8GQyKfZMWd4giUdn",
  "key12": "2TGqZhbssvrkkN6WZQwb2VM65dVj4LZLVt32Dn8hdaPMSBafiG2zX7SvCYPh1VdDXSEajc6sVmgRQ6AesJmqShTX",
  "key13": "2ab5AHQXs66gufXUiGK9N4g4HWuLy6nPn6xNMb6o4giKH9sn477bmRYctrg98S8xW49bLfDCDvHAXyLdQuvR7DFX",
  "key14": "3C8jTDdPLz4qCyGxx1t79wvGApDaiGqXBV7Eq58MtzeN4QMSSSvMLQ5MowNbwPYqcPYQxM8dxmDs3M3Wtm1ivcDS",
  "key15": "4BF4wHvCH9U6ufcTiC19r8a2PiXZY6G4D3gzu2m155j6DG9ZAhUvvPvReYJ4DXoPUPbZdHB4c6bDzC9qGyPccKBA",
  "key16": "38CmefZyUg3DGsGxC6VkAvrWrSiuX9reNrQ8pUnpesX27FRc24qhhmXTAPFW9b1PuBwjtJKy8bNR9XEshDjYjqW5",
  "key17": "4jbpLRgEsEyTH9E9dWiZSXd4dzhJ36cjcT9A8q7e2KtbEtsQh9fB6v33Y3zLTUDA8GQFSZD4KQ3gnxutVYX7XzJr",
  "key18": "3A8UgDfEprY1yRcjnRBHoSENnqaDZ3b6EiR5NpBVwxAjkJqKwWHEoGz4v4rwnd2dakjFgGj5Ki5XHaaDhozbswAG",
  "key19": "5aftYEhAY3dCKPALoroBWL4rw9FefSZLKjAEbqLRT7QDZK7GM1HgF5yzie5Zkw2eKXYYLwXfBLRcBSrsTBieponW",
  "key20": "2UkZEyReEDGVJPBVN1xrtip1inhNGFAkVw9U9kvHHKPm9GL2AgXBqA8snjbxH9eA2KfeaZwHodNaBqMT3GAizD4B",
  "key21": "2n6BcMgmS14rswLh1qXGUkhP5SbdBVJPrTTDFok2LrhLNw5v9HW5Q7aVxTw4bPfagddTMvCbw4oPBAKXawdqARb7",
  "key22": "5N7UDSAsd4zgmQPN2xmJv3kA1mDV6RwKpxoRqrBHfEyyabfPmoh756Ji4UWUP9PsYkvK47FrrJmTftmKc9UNfVdn",
  "key23": "4saEaL5M1tfVS5pLGCxLr7pTahTkhF5kJ3S8SiY6r9QyaWJ2GhipMvczhUdwwbhhXdnqtf8iC7RS5UGUPs5xB1Nz",
  "key24": "43JdU38wNVFP5YkKSSsc66d66F4xmLf4K1RsRTTao2NDsLrQNRbiM1x8sf6dRPeVwUeLpKWJ5VwLexg2p1hhWUmT",
  "key25": "AL9L5WY6KwoqxkdGVTGqvxDQGbzQj36xdFiGSaCzESTiYCfooJ2sYEKJ8Wgt5JYDiMsDgesHruwdJ98ouDsWj8L",
  "key26": "UEJ2ytXa3mTkvGU6cKGUsorfUTSHS63CrhKZxyZkhKXTySJXgxgrR3KDodyNHxRKuQQs8dHvnvckWCitW2Gax8Q",
  "key27": "53WYti458LpR3irSN1deeb6uSpPHEWbk2KNVemiJtSZ8SDtLTETMEM5xowdjv7v8kaDgnsHcLtbCJA6Hs58DY8KF",
  "key28": "3FjZ6bVGsTNtu191uUQXZHADdzTVdepEQVvTbYqVV2jyfy1bmV3VQKYF1vhL3tjd8rXYy127BmypDaTLZD9bi9d8",
  "key29": "3fQNttyDqcNXHt3qGCmA37vZNJXnfKRLnzDH4rhSCm3XhGYY9zzH2UKkVLzxPQ9tdZwSqC6hCrw61CLbok6jVs1X"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
