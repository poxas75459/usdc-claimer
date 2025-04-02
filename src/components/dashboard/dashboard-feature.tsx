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
    "3fGHfyw86tv7QBr76Mn2zTkKSZivV1VwMqo7UL728bF4LuDBRBrrDMBk3Fur9F2QrzHYaKL3pdWRvGNDLfRWYUZG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "avZs4KzqeUy6JwdvtQPuyPjZKFVuPSGdJMyteppYWkbDWeKA7AHGtBknatjW2bEpWPS38yiQ1j3t29x6CEQJDMo",
  "key1": "NyfNpJg9tmHYADyVda7aMiHnm4T55q5fCE3ESWnWtFVRF2389F9h9niJLutHeDfru2wGaWoM4i3ib76qnEtSfDR",
  "key2": "Z2Gg4rPTKyavWQTpiUj4Z5pREXNVsokVygXUoEALWjAwPHct9BkLjdzYAp8pS3BHkRDBNc5dXR53HX1DeqGrKWM",
  "key3": "URAZvzBqApNhHHCALnaTqHeeRq3cTgfnhKMJuSJFE38gK5oB3ghvLy4S9atzmN6FNkH5txEmeqrWWuLhC9Bc8nG",
  "key4": "44iqjCXZg3uhHHC3wjZe4m7eouD6JVVwP5rhmheZmzJ3UiebBiPEK4wK7bnY3Brism1S8JXjfyVMJHMod7auKA3D",
  "key5": "46vi5zNa4hezRbEAw6cjhkSUHP8XkdA9Sen9ksaRCZyERKNj3xXSQKrGMsVshYTJcDKj52frTvFoMZQLg2wShzD8",
  "key6": "2icRXPmTPsZeX6Z9m7bUuzP9XWuqDiqFDsY6F8wtZpug6Y7SjKkkECyy1AxWmGT7vDPXv9eVa4RJpdqDdqAouAFp",
  "key7": "2tw1tnVkjQkJgKuSnS4UyQoM5NMBnf4MUpbmaWsAZTuQRrPweiuVeRM2sCDre6RmoJWLfstTC4iUuHg3onRWAVNN",
  "key8": "4mUi9y7FzEoWuefkhJp5Bz4j8jrf2GfWznxDAac3HUcGzfdszhvi51yEPcQ4q9u7ww975AHBpYBoxyL3nREwGpCY",
  "key9": "5qbmxEgSWNj2Dh1qTVjpwkVex5m7SAY8ahDXwHQxt7cipYmfJ3NiThgMfxMi265ukUk7JcRcZS5hqqcMAwauJbnw",
  "key10": "4UxrSUuCca2TeMS862dUpTBW9wAKpJoeJMSyLUTSESTxkf7FwkyavfVYLyEVF6VKSQ4digJeXjy7EDUWLWLnMPsK",
  "key11": "51btAaZebTQKJZmtrZqL73fTs4GGrAjoJ2W4ALCzJWvg6Tcoy3LsUvuTTCCLMYTM4rkaBgcQQuWfY8uu3DbmVDeQ",
  "key12": "2UEJux7mAANWGfM3tnZLVs9c7DHTFSzuETUigbrC8GzXHqWnQMj1ZnWYdSR8SMgZErxNxmdt4xY7W36axSafBf8N",
  "key13": "4GiMWRzH5mdscD9JDfuriMCbqwt7deRXnaEJp1oM4MvMB9mZbSJNSx6SF8vudtYPxMKdEkCrJ9UAprepucuzE7fr",
  "key14": "5ry2Ekhh1bex199EWHuEL61U8dGsgtbbmScpumTtffw7XZ4GGVgnoy9zdKrejQ1tWyPgBANQgq3NypXA4ai3prdJ",
  "key15": "5wQxUwm49TFfpQr1qHQJkqTeqfkDRVJtrfPNMdxA7ENaz77SZvuZLxHTyYaP2VpJXxQ4jEZWNyMXXsfvhN3iY5Cv",
  "key16": "4MyAFgSkuLwEWtpeSByykr3wXh5bXhgytSUezjuKLtWRocjHaJEUCgzqE6E37Ey7c6RVyZQkGjP4Eszomgfdme6R",
  "key17": "2TrsVgN4uz7cvgvqG6hPuPNKkxyPrJLjnsUbof259c4BqWtDaXwE1B1vc5p6sJJpmEcBF4aci87zDha8GTN93WHd",
  "key18": "dVR7apUdbdkFKBvoNJo2iBEomgVUX2L5hjjVKWR7mFX8sV7QFqRxqWZtwiDGYJQvesbtY2qrFC848FKjwhTfiza",
  "key19": "55qd7rcr5CvJdKF6F3QjUXY9pe97xtzUyok9jMWHx18YjZQsSvxSsd4bnazZCHBgowuBxGRxt3L6KRaWscSxCGbq",
  "key20": "3aoCf8EEMHFwg95rU1KjZQLyYj66Gb6PjbgT2nZRivA49xxaEQ1VhR68dbkGznStaV65ioFEPRVrcVD1EGzhsihi",
  "key21": "62V7wJbKLcWrv9DvjZQ2L3pNeoitwWtnESGvDJv7vEE2pXiJJD11bFa8ghY6Qr8P5jRTsbqJRad9AhYyYzHuvRuj",
  "key22": "m3x8Yj85iKPTjwfGDTDHxscJsLdobgyuefGEyS6tE6zRqirEzR22E5pNUQK1B18APjEpz8WZzexacEGbJkbqzNo",
  "key23": "5Y12VFDmCSTgwdmDmcbjRztxY9wVfURjRh4y4tRMXqjPLzSJJgnqfZTW7dBVJ6eLugfbfRDi2xfyUmV84RLbhwex",
  "key24": "1ztjuqmWjKXTC7wCGQiaWymd7L8kpfxUZTV25JA7v2NfiMJ3UBWRQnACWEjKoBAbB1fAWc5nP59uporXztXJTdD",
  "key25": "5JyLf5JmLdUf6nQ5Ha59LqfkYaAuKfrHq5cbEecTv3YmRsoVPu3fTcf98Lo1hGntynXr7QRRpgbrrDouoPftPSaa",
  "key26": "5wNm5bLcQaQjiKjNFHuusttoPS9nrRT9j7aNw7s5oFqDqCDzvKTDinU2ADAzoWUrQLBme8uckrxznf5tS94EC3Bq",
  "key27": "4kuEMwT5SLgZCmhrFRwdbpAYogMfj9CpEvviYsnTyF2aWdVR94E1V9Qb5hrcWeCkByb5NrxJbXfEs7iSrZyZE3bn",
  "key28": "4EX8Tca8PyceY72RLSoajsGGnhv5yyUsQDLG63AiA7wiB2fZsz4tp8iExYUqa5L27zaXLPacxnEVKniYpWJN7B1n"
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
