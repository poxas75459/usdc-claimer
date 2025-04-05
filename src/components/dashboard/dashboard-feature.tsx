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
    "2bRwzQNthqsTx3wjXJqFUhGAktDVhC4LUyVeB1KnbEUbAmVFU4kpbqtsZht2c1uWhZNfF7KoZ8SqmnkoM4LSjejV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53hJCnTsF6foSUA34nR1yRLTnEaeH6QTMLyB3Y2g3tcuigKswekLaZqL3UZc2knDKLUZgr8AmYKZWcFtYGaCxaD3",
  "key1": "2pZQb8JzZ3miaAA2j1ELNV6DgywvakZ9Dq3vhbcTH1QeBxQs8Scod7Eik3bqqbCfqrq5Bsaqr1GC2UznpFopiNd2",
  "key2": "3R9L5HmeHiBadvVw9dj9nDiDNbHDbCpsfwez15TE7jTYdbunBu6teQBn3oG7kWrQzMNNy79aCydSaJh517tDpgHi",
  "key3": "zVVENSPbdqgDFaVg3eS4rmN2JDNcnNp6wUgB7YCy18EwymMR5ZyiPNLQoNQbGAVwoKuAEwZMUFNmryuMiqqA8ur",
  "key4": "3mSCxSGErbSN9A635XgaosHr9qVxgKL2hWeHoN2wPeDV9uAMb7hZiTh6vvZf1L4eYUw1yX2ffa74YphTbXNKEnhf",
  "key5": "3SiBnuNb9ftkpdopADmKWYiphThbmZe7AbKszLV4dtkG5sBPb5J5jTUV2krJ9RQtwHU1VXmQ7mvWLuERLZwdG4cV",
  "key6": "ZJbGgYGMeRX8zKM63cgxexVNhD4NYmqEm2hp21UZkzV86mquCaKiazBKP34iFGNCs7ejEeHBwBgzZ1NSpXkapkk",
  "key7": "4FxCJt6PHMQAdkG35gR6qDD3b5qt4aS4FttCxR8hsojEcawbrZ6Q3JxTFsqE9Z33tHd6evUb9nJgPd5GLJijmVeo",
  "key8": "4tQ87bMuMP8vhySmvPTmNNNjjizqCWiVyvXmwA1deuLHhc2SmiYrJXLLsoffiHeh82HsgskLRQBAeAjq1mXLMzed",
  "key9": "KtutKTidFbF3kzZrJqEDSm2eVoizWAa6fDR3tDmBJnVDdhbDnAa38Av3cQHmo4FgBd7ajtVDryWRtnTsxAqNQMP",
  "key10": "4zk7sVLNP7E5egrCbAvvStKsyVFaNXW7FtTHrzeWACVUTNcgyt44tpe7sQCRWkD6ezv82koZJ8LpBYJbmnHkf264",
  "key11": "WJFFdTgDKNmYZq9D6BxCjesynUKMUmYCCrVz41gnvQrfwy3oLq4MHDNBPwTaH7nNqCEEmVTt7DQPq5ggaro8E4N",
  "key12": "3yBxc3amp62bVNmPtBApAcp2BVhbyCYC78ismyeXgNLaq3zupqzwA2AVAB5iS9UuMRXPHetakBV8Sc6jR5MPuQKs",
  "key13": "2AACQQiR1sriFjzmmnxMm6CrND4bhcuR9zjeRXcBRXbnz4r34vfD7SX1RgVEZH7uCMgX9X8QDxsnauKXtVDj6aM5",
  "key14": "4WKdVbawmMtRW3WJnup4NW4XLY9UB2EEegycNo1zy8gpk9E2mfYApXDeKbYaeBMsvSKnd4NoNjCveEyEqoSovn6A",
  "key15": "2amz8R6vBccbuKN1qELstdmyz5zmxx2RzzEsEafGncDu9EkGC2PLVE9FtGSmJ15Vnb8WTk4gsKXGH1sD4Kn14jiF",
  "key16": "4QXXozHsBUTKpvTtxMhvbWPkVw2saGZVhs9ZuAJyxKYsiYWPQL3ekYFDE2bqU9ZBRWQZHr99LDDbztR4A7ST2vzE",
  "key17": "MCRSEisVYQyQj6wrrnjdMQQo77gT3fsTBhqATq1osasMN7pAehKSsLbiFWVoWfQpAPnw5xBuRPKWL8rPPTyAkHy",
  "key18": "dqrs8rVhJWnDuvxKssgVADfH2zh4b9LXAN1KPprDheoA7C1aaCPVuLX4MFMZvRKtswmAha8mtQT8YrYxAyTdMUf",
  "key19": "4uMXSva8VE717zzh1oHfggau4Jxa89D3KHP1FjpifdKBAj7FkLPTFSnqhCfPvv8MtxYC5LSoMJTpWCYSP2b1FULj",
  "key20": "67gWZvs3uPLDnRp7yFEcc6r9zbNr6o6RXa24CBGiLWmvPdbVY4sqADUswR27DoP6tm6swExcvrDYjCESLTnagosK",
  "key21": "3xa31VBST5uCDwrLLqDCAuYHtN8729jLenPn46P5KJQQoc13dPzb5uWx6KoL8PkkefP6ptfttpoLEC3iDgbL23RS",
  "key22": "3N5Kzi9rQR86iyEqocKUxwXZmJ8JyRMGQwWbQ9mQNmPeVqzgJAW4zB2LnpYsmxgN1F9piSstz3eFSreF45VnfqF6",
  "key23": "53uM4wwoXLnv6u2c9gsqWJM8DrZCmyhUUxwFU3Q5PK8TNoMFMPfdRi28SBeFP8aEyyGdTMXTTUwsxkDwBdu6Syjq",
  "key24": "4WaFDEfyuGqCVix3uHgWAXKN9xPJ2n6fvtNhkgmHjBi2TWriEsUgjCT8aoMkTEBb4hsdNTzwfkDu5hWXRJNW8VQg",
  "key25": "maCEEnb4WTaANhjPuUZzftKk6vJ1jEKfeDZnc9GM3grDjohYmdSUnQ8uoXk8bBaHCNAfrbeJzjtgzSubmdz8goG"
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
