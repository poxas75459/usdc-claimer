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
    "36d1s79V1DUWjpCaNcC9xmvsP4qTmqLx5C4Rb5c91AxARfvHBZ7Dc97K81xaZ7pDKVXM26BKxx1YEHJb1Fr5TVkT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67NuEhWNKCBCLunYMfafUJJgngrayZha5MYHCBqUiqWNoj4N1bBv4D3dgRPUmue7WmQNHJbKyzARVLP8hK27Sb1N",
  "key1": "5FAiDfeWmd7YkgA2XokjB4GPQBza8WYUPh7kJnrE44hN8y97vtwRLR57nUQEWNvnfrzgmjN1waUmEyT1ZWhQLEAt",
  "key2": "2DMQ8X7YsnyezJb1jofvqqs1LWiRLSoKMZPQBMuGFHZGKNMkSAe2pu5teyFEbZ3zR6TiRAZLmMiypTaKMfynDcrs",
  "key3": "4S8dM4WYcTys51jnRrcjNCMLFZGDHtM6uTrjYRJuoXEQyoduWkYevHQicBuqHTY8db2MopVwqvt8nULFM4PCg8r7",
  "key4": "41ZAPUPXYXQMA5vjpFNPp1VJnizV2bz8X4QVUQvD1xtu11LxAtvvyHqemugu3BobccL6mpe1K3dLd4qNKf3kDsjx",
  "key5": "5y3mNqhfSgPPpJ1SvSsrjEaNipNWAUoeUhp1mA21drqMea9YzfqxgqQkpaxBg3Ug34VJ5ZRyiS9ycDXgVkmCprhq",
  "key6": "47QKM1poqVENJEzbFNY7hFmRdYPc9hdHP2uQityxrVPZtBrX8BdSf2V6GqNhsy7qruvFLornjTQnr2t5yhhATdcU",
  "key7": "NzbCPUR6ue959gKJTrKZM2kCPJZEPPaFWEaP16wTAMXePjFZAEvDcX9BRV3yNCTiR4TmepY1q2GcyQq7jWPiDTU",
  "key8": "2sShrcMvdnWMmnqVdgndTrWVjdNsvyUpHQoBftDtBnYLcaa1duaF9rMRMAzmXtzAW7Tn6mP3Ukiitu82VtaQ2pU3",
  "key9": "3QY349FK62Zr5rhKGaGb4e5FTe5MxjSeKTZY8jbo1eyQu2ivJ32nhhaFmFdTAmpGMZ8J71BTj8VLKZeeDxqiKNQB",
  "key10": "3dgpf814JPr8DKfkWN1m5KPcGzSGbEhqqQnSpk9E42cZo82JmpYrnkZnWup6RDP87nrhLHvky8fS5qS4xbFH5Vkr",
  "key11": "4Zzxb9eNf87MaCvc6N7sHNwxmLXqCTZaGccEvYZZaAiw7WYCYTD3qGbhLH1ufCwysUdqUoDCwDjgEhrDDg4Cpjj5",
  "key12": "5s6w7Rs9SeJaATDKpd1XLg5EoXPJ6ngd3EK2tEGtL7PF4t67wjURifx2NqJf8EcRj7p6S6EmTRWYN5dt6xn3MbKW",
  "key13": "3LebRs1onwQFnGaE1jphNcq5uwNJEtjeSct2MFYkmgcxZ1dK3L8ezhvyQ6TpQCuHjxYCWfWUFcFaMZcfrJeFQx3p",
  "key14": "2H387rGQKbfVYddfFr9BAkuj6R1Ki49PnwtsSZiHNwtRKGfkvFhtu7LHKdieeHWbj2D4PdoJ7KycgnL2pHyGCdiz",
  "key15": "3GefSufkZgZ5p5ZQL4a61KnFSvxTrzhDpSr86DuPgguZUnB13SNtGvHurYUhFhxSY3iM3YPd37oKz5dcbRFPPRT8",
  "key16": "2SLFxUs2mgADuS5sDiXnKS7FZC72TWuVXitXNk9bcrvaNuC7iX3FhcKdnpkF4SZMX3S5AKdUqH22Cc5dvgWsh4zH",
  "key17": "63UtZrqjGVFGwHEHza336nrRFSGb5jur2ebguKStNFyZbtkQuxhpHDKK8d72DKQLEN6xx7qmd5fzjrAxQ4GptixR",
  "key18": "54PWy8kSDfcUieb19S5Phgiqp5fEX65kUiwjvyfxdJqGKdwxJ7mePqJQdLHxqigT9YgxdquWdGC5Ks4UPoP7izNN",
  "key19": "G5xHNXAsQsXxqG1GbKPL4Fh1hcszv9bVHJhs56PvrAAUpYupaXdrepoGRs1jxBJbVNMJrm4Tx6DGjFcVRgeWpNn",
  "key20": "4xjM5xqzbeJPwmewQpfVkXfHTTUdST6GHEJhzmvZbgep2BHjnoFxoKcxNzmDjgW3VVkCVomUbbyp7QDAdJCiSce9",
  "key21": "hm8VRt3ekrKrZ2beM49WEWUTZLSWEuyUkKYXjPwTNgxzGSHBdCMyf9mVHBZcwbQSogXSJSq2L4J7gRtYfKTABPs",
  "key22": "9oGs6wiR5b7WJbkKTwgram2uF77SXu17RsqKGabrCbHDcnbENavuquVsrDjdmDndyqLoVoaLZungawNpV6FLGDf",
  "key23": "3cyPxu9EH9uBFAU2MEotVtgtwWw1CiDJ3kV4HNzb9Wgo3F8BUHpSJHFUBcQtPvW4bYY5BnQnkx4V2hXxjYNy8QKy",
  "key24": "2Rudnb7jSySJkyjgtK6KKWLcbqhbuXJPvyhwiEViBGBc5eCRw29TmR3CxinqqGbHEi7m8nSFbPMjvgR1CWgWBeJ2",
  "key25": "4anBMZNN92M5es9ZzfCYJBnNRHZqvie2mPdtMX7w6kn1NzFoF2EpfAGNt4n4BG9p5H5oFv4TYKAxmXskd7m7CHGo",
  "key26": "3Ah8jCf9gC87EU8ynp1iaU3XMCYL7KcTxzFmjWY2ufRctuJitRa4RivsXh6MWkNbmsPXBPcb4UYH28J78PRBBApE",
  "key27": "4Y7QZyrXgiGRekuyy5xr7UjPBcxbEP5NcRu9hZ5g5M14EdrfCJ7WbUkfKcoHxtew8RZ2vNYgzhttnMAigSsnoKT1",
  "key28": "5nvvrLxNr2qhj5VzGeoSr4JfuNfgodZ4Ve7GiZH1km66mbxLMkUfJzkNN3P9txT28WJQWPbD6LQjpiuZnPgMQvKH",
  "key29": "6riJNJ9fhFFhrvmcdk5xXCvXv4j62gUUYTjLTbhkuKsuQKpJaz3ctoBLHuurLATb2s63mhT6gcKUSqYjygtPFbp",
  "key30": "2XziHBLUcEVtcbPMCRKFk1CGBvftAKtxCo9pLdaFcb7H4V5Z6LbE7UoJ4c5oYg1rv3afrwkEmPANTy9bfmah336j",
  "key31": "zaXSEkh8uaU1Qm4JYcXWptd3SrJaJ8gXFMxtCgGugj6QtbL2fthFkvuFkhytKNrNjhD29aGcDEo4ACv33tSfbHn",
  "key32": "3cVQji5WEqMUQkZ8W4mV2Fp7QGs1CKpgPbwjeF3XqnAt6k5B6fMGnk4mAjj4An8R1sc7XPmnthLThGKJHM9h8SxF",
  "key33": "5WwXVYk9miHhHDYcpP4S15BV9BceLbGUuTgxjEL76yqd4WJQrqYjJLfRsrhbvJhG4HWrDV84DvB5qwCSRmQBxame",
  "key34": "8CjD9KiRYhESvdvV1ya8HWj8gbEGUtNeLgBrGakGWH56iinzPc5iDd3z2mCiKvNkB2ceyruJxsYjSa1BDwSptZs",
  "key35": "2hSfZVJmk2wLFXDiATBMsrzdnRjqfCknGiVrUfQjLWHKPCcRRnHZHtgQbDiMWtNRd4ywxm7d3KdPrNEMu8xB5aa2",
  "key36": "nbrjL6M9RQ132EmrsxjZpEvDQoCVXjTeeBGrRUKhxy4H5WoexsQm2N5bXZn4cN3cXnh4vSrjM5MyzxB4ELGAoVQ",
  "key37": "3mdhaNcdvRKQumD5rwqDidn3AXTnd6zQyUoLeeyTnFQn67yZ59P4mnT7Va58MVEK2QAXbWf7a2oRZjRMD2dzRyJR",
  "key38": "4aMbaYqmjHHAmvwgtUrz4hUGuxbr5AmhAgStYGgg61B93356tfq5CG5wieRCCtdZ5z7AQQ3aBZ8u1BNyE4ZCXB2R",
  "key39": "H8q8bs4pBLKF34FgQk4RHxb22EobiGwGa34LYnU4ezQ5tcqzY3iYM6zBWruYF8KNxkwQe26qEGATcMtoXUV7cKJ",
  "key40": "5T418aB9QZsJKhonUadwdwvfNHgicydaCaJrcHjH623HnAvenoMn9qyK5sa5KyLpQk4FhG7LKNissGUQcxTriXDF",
  "key41": "5XTSmZ1wLdvYTZ27sUcAsnKX9DKiYFvfUrmg2kHtizZv2mAWTJjVdbxC4mCmhx8tE2PhkVzvYSGq8B5CER67ij6G",
  "key42": "3Ym9KGjAz1W7J9SjbJmjuq3NFo92p3K3vJqp49AuuhJsLz5yYHMFtbUE9S1wW21wBqKRoyDDT1VVqLR2vf1aKCzc",
  "key43": "MouW6m5vKzCuDXqriXzVDThZGEVKVDck9fA1fgRpGVSrEiFeuruVJuk2ynjMyPLBzztFa4VGcKbxP33YLVkZzdz",
  "key44": "67Wyt2QHepqTv526J6QRR5KXNRsgkJu4N2opdFiwA3dCpTD51aof1BpaFoRgKzwukveQv732i6fgqn1nABs2BvVW",
  "key45": "48xraJh2M3zpYZT4b9QgCQZXSvsAK4AmDwfVtj1dswfUnmr5GAwTHr1stodfBASkRtoo7QwBdoAqECTUzxVkqsr7",
  "key46": "4nW5uv6rLWoKhU7NrKiCRZkn7rdwo6vELo1npJrN1AEL43ZwFvJdfz2W85frxUpTSWKPd3674ZSGwcK25CW3xYp7",
  "key47": "38FwGb1zPrKQL9jpAt1NKYnLBnZrSmtSU25FfsvyPNNgQUyFJpuqvdDkSbQQK1SA4HaKGucycoPbHJrbwG4sMKqm",
  "key48": "2CdQZebGK7tBc8AGLpkaL62eNBYQftqoxC8gaJJ5oVj7BZAK69V2q3sWwPKEvpBuyE8zs5RYpFhbcrx7CmqoYwhg",
  "key49": "4yP4kN2LDwyU3DdiXZAiasz5H14ic9cLqN2SCSd6dGSvRGggBNvuRC9H1mwk5YuKu454iF9dsSbmWEcujg1THgcU"
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
