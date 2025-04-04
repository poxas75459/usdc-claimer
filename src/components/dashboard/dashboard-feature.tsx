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
    "4QzZpVCipxdDNDnigpXExoPsJfA3Pckcf9T1VqySXYR9UNo4p6V9dJxAFdP1WuiG8Kj2GMSoeuLbBvcqjbW5Amcd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GBZjWzZyoHkmkn6MkCJFerttjzBuPvUbF8HPZdASBkuBjv8zzYdwdCwcgFdWoAu3CWAdGoE2j2bMpCzQwUEuSJP",
  "key1": "2hxxCao7L7dgSCDKRV9WxaZyxDP9zcoeK4Cc1En4TZHfijwhm49SwGexg6ZzHNf7qnE3gnworew9eEEqJjMWWDmf",
  "key2": "4VhNkDkkG21zPP8JYFCJrRCjdMM5LbkyZe1aKL44AZqPQ8ZhG27GkMfjSNSZhjL5xx2dPKdvJfVg4fsx8q34g4ey",
  "key3": "zYLyvqcZt1NBYpvmbqi7LW9Qdykkrrdqi2TJAP1Rbrm4n2j74xZW3DN1aLWaZMrGEvTgMkzqXwfMfUzGZqLFK4x",
  "key4": "4aD2zDt8AcnbFFHUDUD61rVShJ9RfcSLVTJwZHdeCxAFqYouVNB5hKiyjsCcZGUtMkoSuMM5fU9vPtFfRwT8iHAC",
  "key5": "4LZvJBu5XyoSHFNCxivLfn4esdeeLKEaXB1yK5jUuocVTp1haha8o4wHgBhL85NfDmP8BNZLJD5CE28BiV1ruo2b",
  "key6": "3H4PTPvqH1UkvcLaFpwv6yJrg1xL7KPmbewpjiAH7UocqD1pvSzFFgHndTpChcdmokvUDRaTyUBUeDbM29ui81F6",
  "key7": "pyRYo4bHUw4eUCihyAyA2Q1faRdBEs9PW43H4pQksa8T2cCQcc8gYFMZuSSCwZ674XXveorjic45ngxG3aVD6y6",
  "key8": "E1sNuThqa4BoL7hK25JFxXzq4qWrBaci6LVcvUDqAjo6CWpVypsyaF33HX2XzCnKNL2iMBXaxTFAMyUoXP5G5A9",
  "key9": "3ZBwQLzgYW6yjaicC5VGG1vnmeCZbQz8mnjBhZSWqRXJN1MdCdz4W9SHmcE4gMnbaZpELA1nrWeAtPqXZmvNtBLt",
  "key10": "3Y7fmSMZzV4EMjcvgB6nEGJr2CzCzas2zpsVkJjkhFtRYGoaHroQ2iomfp9sYuWK9wmahZaF2uWFN8nFUvHbHhh9",
  "key11": "d6qBSpEu3dQWQke5MyeT91e6hP2b4F9wApUZN9BbTyF7cG2pptsJ6ekdsdQdsKK5DJuyJ7hgKNUomhsTM45KHKu",
  "key12": "5k4Du2tWPfDrmGvUk12EqBhRzm2fHiNA2rLBCHfu78462yvV3dNKhoNmPSwoUSoeM9BCpicX27zuvHQmE3mkqbew",
  "key13": "2dKR2yraXkRn1S5PivtC4u6yvauUbQGafQv8S8PdBybqyqC5vHuomv4D6HPPTKLgScvfuoKhSS8s9TfixyVf2Vdf",
  "key14": "kNSvfppmtgqMouzRAMZLNznT4S6BuRyYVu4JiuzXtqR2rvwEppUgp2o4SXoevZNzFKhJzpgXmH243pw3PoYW3Sh",
  "key15": "5g387rERFr1mpJJa4iFD9EfHrqPxbVPR9eShuyiNgR13jiHDKhMWSj9xPRT6vZZRNAueKSxkmJwiGMpMcLQMk5NH",
  "key16": "4NP3jd3axAHA1s3PjaLeMzvGcws1P6TGRu6QjLXwBnikHdnnEp5c7YpG5PwLDpcxga4kE67ngMdvj24Bht9b5ReC",
  "key17": "hE8CziJRpgDBiuTfbto4D876J4fKT6SahtCiWjMS3f6xTsJCydn8UwV3CYx6wohriVU6mvv2TPGeCULjiP74P3c",
  "key18": "23yqS34EEysKVVBw1z9T1WfzsgLotqwCQ5urAVETqqKqtYQuEiprcRqYdXXZVBbFXepLpH3a4vjdGUaUG6uGrrix",
  "key19": "iRvACVrvVEPNngK1YLnKctZyXNKzSbaNwe5LhcqUV3UK6v7S2v8xzV42Kqrs4rDbXsxH4Kb4CSmj1c4jtCvwA6E",
  "key20": "573XrNQpjt3jCe27wuK3NaYq7rJA2Mz4Emsj1mBd43rD59A3S7cLBxWuE8F6sKKTxmLHFt4gZirjDQZxy9B4YRRN",
  "key21": "3SzJWHD3M8MppHFebL74UktLyGr5vF3V2bxkAAdTSvCvuwXeoxRKwtds6konSaGELQkdQQB5LJWeYeXTGjkLyY9c",
  "key22": "5fGs29SkN82r7NG2vt44FS2sdpfaQHxGNx3um4AAHcgyzBESbqn9pgrsFNe5rtVCo211D7zFvy2roZbyqL7noK7p",
  "key23": "4briJvjtkVt9LoJQBjPJPeUZgpvLJzXnCaNc5AMfMCepcCQonaeFMHosfeS6U4pnm2uoBJzuFr48ENa9WGWyiLbh",
  "key24": "33qZnDJGAHgn7a1M7XYxUjB8ZtqHaYPNfVxCWMW3TnFduweGhbVcDC7YnUcXaL8mQG17VrKhnjjGKw5n8SisJzUQ",
  "key25": "2WY3eVgLztMShTBdFVJ678R7HoXULHoGsZDVadDxw65wfTSYNuayduj4rN1amiJDETPSugjkrSwW1vTBQ9SKz8cq",
  "key26": "p21NUyAPcz6e1V5CG3k3HSoE8oYHGuWK5Xfz3VnUfPq29ec9GN1u6eVXbD99DMHG5z6fResVrpdmWrrRmesHtVY",
  "key27": "uk5SJMMeRhEcjjwVwZHpcA9cdKKZNNWZaVUTkitStEJi4LnY7B9XSLd28FfW4HHEjPomSk7sQz5iWyjcNtVp1u6"
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
