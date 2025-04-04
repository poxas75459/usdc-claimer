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
    "24Csv5K8793EqQ1diCwFkJRyHo9tGGrcDCwSVstPYKY1uJ5BwNeDgGpiGYTvScUJJ9bz8Dok2vAgRKaqZs24VwyR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "342iKue1vYBbYRB4a8LSVpvL764wSoRpKv3PXim6B2cMFPTqtppLTjQPdxDr2hdk9r8CYPawJ3sDy9sgpsWAZ2Gq",
  "key1": "3PDR2iLptep3Kp3JYWnhtx5pFVR8jKKGn7fDuez1UTwHBLeMcsRqceQwbV1ofF9K72ixujuUTDeNrHch8d2mvEc",
  "key2": "4VgEnJUqVYfZmycBdQK5PJKoXqSjKDgVXUfkCVpfbDPC6pZTzRFvSrbTcE1cceCTqpvah6L7qGPXhbGDCeM2PGoA",
  "key3": "2gFThkQqUGirrncJQcpdLuWAvU2VcgxRqxRnFH6Ru3gFc3ThYcQ5q5agFXCdJcLvnJafHd58XQySVwnduSNWmkNK",
  "key4": "sj1e43az9Kf8oZApNN6XECKouVnSshbhMJnw5RJr5TDL3HTyFX4esYMzfy9eGxbH22cs27vBKBhKuZzpvtVob5f",
  "key5": "5rcnBHti1ppQwNPNst5JjoTP9wMxxFiPaVSnVegxzcp645XjNdhT1Wbcxi9ghGJXsNxNfJYoDqBX4sPqsdGNjjev",
  "key6": "4AferU1Zwnf8F9jM4UedCRfDDYFwmmp2jXcbE7i2hVzdDxQJYzmoM17iZDU5EWeXGnDiGZ2EQbjs1M9swYeotY2N",
  "key7": "4oR519WFBZmG8cyzc1gQ3A1aemUva7JJL9ukkLxcJG4kgNVyuJ6gibtxmFbUsxXe3am4F4FNgz8yfptWvQ13wKkL",
  "key8": "4AKv2weaA263UBGM2tBgDyW6gXvZ52EeifhCj4Ni4WdKqhr88nzb2QXhEhQoft8xxhgtAQZx9Wbs7iu3rG5UimP3",
  "key9": "4hVUbeK6m2LUHBPHG9MrzUrJRf7sh7FKsczGdZDKZcncj7fYBnz2p7NmEDERcy3p5AAHKo621fCtpcHsF2dyUqcf",
  "key10": "3SjUGo8RFUF5VBznqUyV7mKGK6Uum8Bwx2EqrMTommfXz54XFCH2Fo9iexyiSV13xjbXtx8wZp6rfGaH13Xf9485",
  "key11": "M9J5X1tBd3LgnwbKzN7UQDUJDxWPD1JjLXvRxM3YhRNJvdPCEVYVsM1NMRJKq9GwnM4avbPwx7hAUVdGuMEbYTh",
  "key12": "5ASRuXU733ZkmF8Ndrc3FcY8UmSEH58eKNg7jQMnQd4suiL2PgV77jbQF3betKADMTuyKEw8k8EKPMUn5jmo4AvE",
  "key13": "3EjBpoJY5ni6LE9KVFRMrRMqQZGWF9Rqsr4Xc9PGmgy6iQYbRmBMMecCUiLqcrx459sKZPiELVbrwkD9JE8aBMTe",
  "key14": "3wFgM41Yx6zvcQQsnaQyqqigqejhWdv2zY4jV2AfMHFoMwRaX5rL7jwN8L45DU6HNBJfngXfxFBh6koZwmDYAGNR",
  "key15": "5bPM2xNtN2Ay7iJBBvZMDuP1DEVqwZ28cXbXA29HTAZzNsSjgrTG6DRNvajrCja7dETK9H6NbAhRQH8mjyNtomBi",
  "key16": "35WW5Jqq4tV5ogApyBbmtChqi419Vcg4h6gwW9iGoMJzuK3Qe5DzAP3kv7QXhTEtm6NZ7yZF6sa77pUerCXMgxnD",
  "key17": "4hMU9MSkgS3ErSRYKmey4VLxKJCYqcjJDFYponpd4BEQtp9mhUXKfc8ESXTfEhBrCDC63VC12db7KkN2xcaFWFv3",
  "key18": "5Zm7GYaKgPoTaTfgheoUyTiFsU5S1ZyikG6DNqwsut8MT1UfQkxL32wiaGWYzZdYDrcUByLQtSoSTpj8gk3jW2Eh",
  "key19": "3d8sfMY4gyMEJqyzk21U7bxbCpKCtgK7ADPnpj7XFxLUvsf5dAd8qoU2Jo6ghDYeRYsJCJtxdoZHwCJidQSH1Au3",
  "key20": "3aGW1yRsGRELfkn28KXqZ1TiFifL3pswAFm3dmK7P86Pq66cTeC6NrTcDxGjaAv2TYroxB89GkMZnFQqZdkn5Jj",
  "key21": "2hu9wXnpQ1mABEgdB6ycXcuqxWpo93La3uAiSp8t74b6tLF5SdZAQi2xbsvaSea3tiGPgBBzqVnbxfhzsNwhP6pe",
  "key22": "2Ma32Y7VvPaYrg9qrfThDg59UPRZHdViQf2yCTgA6Wye9GPS83apqsfhtXhHG3f6mLkdDyKUzjE8wWXgXjFohKyT",
  "key23": "3GB3MP2T19EWqYnn47bjCW2kvafkyTsYV29WuAwWBqznh8jjnBNKmV6XUodZxd8p6eHADKj9AEVp1jhyPGnSMe5f",
  "key24": "2NNN4oQ6wkrRWJEMVN6dGsBr9z9xtmspcYGbWsiPyhD2azVzJgQSc87JqasjwcR8hZ5PDGT55m3sR4yzT5Md48w3",
  "key25": "3CsnvkLKtRGpT75Ph2r3oJgFsiVJT5vjVhRuGkXTUrA6JBFRDcJzktgVJG73N4xUmeSbZSNzW5bYJrMYG8HAkoCo",
  "key26": "HYwtiRt7MVRPrvNAgiVcNfF2uNmByhHyvn1NMXu4hBNHrc92DB2crPQdkyyi58qqerrEFj65mcVcXhS3qg36LFH",
  "key27": "ZjuxTsg8pL86SV3jHYnH58h8DzXS4yqJPjgbQBbVxpwAieQjS8EpuDCH4U3XfLfbSDC47rnMSigxoChTYCe4TG7",
  "key28": "5f41zYt8qv5ErekFcFgvnzJLqxK7eC2ysfpRuze8dFh1ExMi9wJL1e3CzLkSddsragecMMnuVaoEe9RuALvyZDzq",
  "key29": "4F3YJETDudpQjFyJkcgnf1KZ5RGHGGD2co2TmWcFVYiGcGwkN7qEsbm5gGVGbexB5ji7ETp8bzrqJzDbiGWRZe4e",
  "key30": "q1ViQzCf6r72gS2YY1NA86CR22FhpTNamopzf8Pf9QbSN5PV97tv17sw8GojEsVm7aKqhNh96Gca6WCvdzukpfC",
  "key31": "4VzcsJbJsu9Cdj2MJA9W9ftiapTcK8qFU6Dpo4BqCLz3pHnJ4DsgnvnSFJB8R5TiFaoNdcrcZJr41Det4jZme4Zm",
  "key32": "652gL2ugZq1tZmGTVXmQVPxx4K53NdRYoQKnusrTsQCbZNztihHVDeKmQMS1WNEatDmB8cZEbvT3WMbNzYRJsHnf",
  "key33": "64mjps9MDxSgxGi8D8xhtD469HKFysETf95L61eVRVjyz6GmGs4WztG8LCgBmH1Bm4QEeZDHYL18sffevagGnord",
  "key34": "5sBSVjVwjMbHKttsd62MEn1nGih66MgXxUZXW4En6oCBgThD6EVfnM9nLcYashYEiSEoyWxCtqdz73ccHeMJt13i",
  "key35": "3iApCMM8VJR1uEPmSBgAg11Geh3XPVNTuP92W7f1HaHodKWbVq1aEZiAeM38DH1bFKQhWDqmdb274pqRE2i1s368",
  "key36": "QjfYpN1ep51zTYpYcvCjwfQpv5ytc7JJppw5s4TRzdEEekdzZaPpdGyFGY2TuTD12PtXZSf86YqV1Pgevhtg6RN",
  "key37": "MUXEPsLVhhTWhV1DifSaUSfLjXuxNFp2vnWqCEXooTaAwswbePE1Vo5thMPx7jDoVKYa5JpTKTJgTMf31xPwvjD",
  "key38": "g2BsKb68cC2oWyQTzFTfQWbUPmtNU2FNwt3fi5fTkuaqWjheCyZiFerLhkJFqAd94zapxCeyET7LFVG5XnV8GiN",
  "key39": "2u5RJS6D5TFBi7dVPGgUr4Kp2qycPU5QAD5SPW2hGD4LHJ3fv21B7QAFuwe1SEhMCD9h3Ha8r2cmPxWhPH67wBTu"
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
