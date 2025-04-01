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
    "36BoLpGLLPCpJGb8Z7hWXWeBZmfavT1wxaaFxQt2oPErgRCSejxWXfVeMgYWy91NbGiPAybxS5GZanANackVBhuj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PwV7W431QX87k1byC3AeAU2K6SJtAiX7Ym4CLEFx4xM29mQqFo37gGRtN7ta1UyDoECXRjFfHFHgd4S9r3WRmUS",
  "key1": "QtG2R3nUUmw2VsKWqXF9EvD9da2pGWgqjUqgfBs79fPnrTduKnjn3WpBXMTgLV4WBUmF9EMJoHR2THTyyenhY2k",
  "key2": "32XcVQoQe3Aj2ZSrtdMhwDDYmkBxhRTwPMYkodrrH3CS9pEKbPqp3U2XyPKr2hePYis2xPczaT1Ds6nWjmWQNGcA",
  "key3": "uNTMQw6mezKxGQtoxBE9o41UG98dHENcUDbXMhFL3ZAWa7EX4PvhLcGjjHTWYJXkpx5aPhM6GHityEbGcJWaaie",
  "key4": "324m4yq6ABm4QXwFWX3e8VvZhRS4T867fvryCz983QHqkg6YNXcD8WGorBjZDJFCaGt5oToixPBZT75d1Vqg8F8w",
  "key5": "2hMQmdm4hqizexsAxEBBqZtgr6cbP9HTA6AgnoYK4ws1hXTtauVwMbq8vZF1JEZeiyCADt6D1jqrja871Zf1zDPb",
  "key6": "sjSvPCHkz5kYn8ic16kSH2a86iBK52UbrYz7sq4WgWYGx5pMZV18AJbATMWEkZdBseSW7jcfG6HD5TEH8Ddxh7w",
  "key7": "37hfUGcq7fWA6Sz4iyj9SxB96pvpDkn3UrgmAfikN7xS5f8MRHtnoGLNoFByMfrgLd6AzBTBJ3dL2E7X3Y67L5Go",
  "key8": "5aN4cYL8hQmaGZuouLcXJvSsXdNdPDWpqttZeKDhUTZi8dFCHMBNbJpHeME8bahvq4XLkJQyxE6Sa8o1G9r5Lqgf",
  "key9": "4ZCyQTSDoF79EzXwhDrMnzXt2fcQMFXHNPH1re14ggUi4BHwauMev1Kh8hCuM3qWPCigRU8hpJXQmrG6ZmKJ62hQ",
  "key10": "44tWCjsKnn6SmYBjYruLL656QWpL29zxBC7d8jL6rSU1RhLeHEepoD6cJ8bKkNRC8JKcQrvVzfD7g6KK5vgHbC8A",
  "key11": "5KACa41jB2433e1gPjxmBvPc2yTVtWuxBmTC8QRKytkqScbSQqkqsybHMzzoUg25LdMrkZvZSPSbHaYQsqPEodBk",
  "key12": "wLSWyVi9kNEei3KERbcb3PeJ38PyPx4WxdQzSo41oU9pn7AnHgKZQih2vCoqrnEnok12mvWnioR1kfp1gAtcJm5",
  "key13": "2PJczs4trfDjuL3NrvSdp1FQFnUWUXMxCHYaeRbVBwhwCB4VwFuJ5rHiYRzjjMPCUnKayY4csWKTzcuNdnTr9TyX",
  "key14": "3A4dubNc1yA3SP84ZPjxmxCYZ5iqMraSSSYKjBK2c9B4RNc5dWTN6yDcURURuE6qviMK1oGu5hzj472Kxbz2Ukym",
  "key15": "3WtabXtRRiN62m85qMJGF5ZNp7WFfr7zsdkHevgZMpqVpSe2ixJApstxLiH1gHWhuEpHVvLkFEPqTetDJJea6a3z",
  "key16": "2zUyvtjwvKVcj4C7BGARqMFkAACR8HPnq5ccXU8CTcw2ZXM3TWBn7Bnon9WsjoLmSqPvZo9NgiYh9w5ZUz7sWFY6",
  "key17": "31pQnzu8JgbGkepHTj9Tp6rUnSHoWgsu8bDLZc2KvtBZPcfbyPzRKCZKWiTiboN6BL7ipwvh6jVCrzvaCMqfbqLr",
  "key18": "3UDoAXDmkPEfyn4ekC75mNiPj8xVVEtA1bhP4HkduADUEWsEKpm1SgiVgw1YCoKp73LXewVP7RKRWrbeBhF6WEnp",
  "key19": "5BwycSCDZd4pRwU46EYyALWUNLh7TuAArnEHEbgDWSyUYawP1uGLq2YWxinP4tsCT1QVrxNNWEpHdxxvjLacSNqx",
  "key20": "3xPrYdj3KAggsrhCamno7BvnRKtBEVVqyzuzC5Fugy4moSws2VWQsQedGtzU49rzfrkR1JvX5i62iT5zbFnNdMau",
  "key21": "5xf1hgqvZQS1hPiXovR41ZX5Y4ce9gcRtGqtakbUrvE64BEM2iW4PSLcrZYrvY2V235KN24gohjRVtoK3WMPZvax",
  "key22": "4Kjay2KoT3Qffa9eD4hXfBeb1VZvribkBHcLnVfymzLM4YnAQ39pXVma5MBVJpmtc5LoKfCKQ3eRjcrvBqKjxXER",
  "key23": "2GbXVeNpk8jsm1uNuhozdTXoa7iQTx6ZPafpBPAd45w3WxAKyMzhecqKCBhMJX3SZ6xpSFS1Rwz2K3pZHbddb1Jn",
  "key24": "59n9PBVoLSiVNN5BUEQgZbvSBEHAMZpjm7HHTz2BKp9x9i41dat7MVjMrya6QH3RKgiH5wSRv7Jk5y4hep7QepJf",
  "key25": "58q8C1XNyVs4K9LyWVW8t4ZAkhqhx4PKjRQn8bu21sNehGP7h24GMgF3pQRNgvg4a6MckRsjvkMWyaZfLeagxETk",
  "key26": "2pqRZQ7RycbEso7Tqcc74Gs5jngbL6WaaGkFyA4iLFMJSJyKb4HZKhTTTGmPnro7MeFvzrCNjmad6GqRKAtFD4ve",
  "key27": "3pcCuUmtiav1tqexfswN9DTo8v7AUSS2DueiGbH8zgNZ8eem4FMvrNfe3ySMwi9zBwumPNCoEPD2Tb78TsVDTXrh",
  "key28": "4M1J4osecPyazs8wjQinNMLC22hvhGeisU522HF5tV3U6UqnmEqEkac4pGmgFRQCjux9qsT8vCnvNvL3kwRjL2og",
  "key29": "4wuCQzHygvmxkcaqvU4HVvT5C2fchZmhTiX45Xqgb545UGdi4RDPbiJiSzrXpAKSdYs8a5LjY7D6wBs8oxwd5e67"
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
