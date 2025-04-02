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
    "iP1eDUMri2YrMgJjtGRG1gvQnwRhC5CV4Ppkk2xz72ZsTyrLD5RH5pkfpYLKyyx3jUSXwJDrqnyx8wdZNXCizTz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4G6BondUdJm56y8trFFoheTQ34MYiN1dEaZ5iEK751NzEvFQpoZ9Fb91pF2xmNax4996BY8i98jYzEFwoKtnTsb1",
  "key1": "mnhSZ8oEnsRyJkATnk7mtSCaBFVNtxQxHE76GqVW6BfqgNzGRdgbk6U1etErVYDfuok9dqigmxaTVF5na66S69S",
  "key2": "3Dzb9vGGD2T3iBguc5ngQ47joMdbaDUU8swJTiphhS3bX9E63nUWBjc8qs9Hpc4RgXLgiR6wYM6CcVyYXgsckc1k",
  "key3": "48AbTa3ELC2ApXESnPjo8gm5Ejjqw7on5BGdJTnPEtoqYcp8ciUfDhkfssuUdoPtgQK1gV8N4dFSjBdpRTe8pPfK",
  "key4": "4b4XEwHxt1t1kPN9CAp3ioHNqa57PLJLV9RZAn6Hc58iewXy96pwiUnXVXVJanLeNKg43UgdpECkiWrE57rxS5v1",
  "key5": "5YxfVvjxVE62Jn9C5Swuq6PPMPMuwe3zs6zesyjkGvw1CMZtFS7NVhWBBnwjy4AwdiJni6yokLo8htbxy9Fx7p86",
  "key6": "5Cw8dKde3hsyg7YVrvFhaYvS2vCsUb4qYcFgaE7YgVUWGoNcdE6MeHgeCdP7frf4Z128Q2cARW4ycXMnXtaHoxWf",
  "key7": "5pSffN2R83k4LNSXLH4XfZ9beWPcVZ5sWk3kbNZHa6eAiJPfGkvCN62UQKMbmfP1KAUhSFgFm7mMbcswvSQK9RFQ",
  "key8": "3bk6qsBGhfsrWA2eG6gdTs3WKj4WEJBZFhTCqu5EKXnpptCrFAVj8cJ8z9295QkNR2XqeHFVe1qDGVyoKmgz5SsS",
  "key9": "49iph6qFiFMXSvXQYEvz4H27Y2BXMLZJCS1puscozamYPv9Hq5v6v8mBz4iB1Q9BzwUJ52BPkA1v1CUWyEqoLSuD",
  "key10": "NNUn8Mz8MsaV2jx865nQEPs17P7oQuEbVCBwqtfxVoLPXtAqhKhwpD49SKRRQ58jfiJpUBBwgmXVLqES5GubVwE",
  "key11": "3CkWcFxZn37aFPK8BB2idkyahBKq1Yw1NqHoAhFszfL5CTD3Gr4DiDdLnnfhDLQzbbeKCakUxtP2HEAF7qk5e73",
  "key12": "XBgY2iERrBUWokEtct7BVzdYPLUSah6hUUXpeed4qpsNehXs3RQxH6ZeHj71XN9L1jp2EFGHC4of5kUXCMfFNJe",
  "key13": "36THTnTampj1Rt7q1F2HtzPVRuvywtgdLHYjChxAUFNHVJpkrG8KsyhLJ8wJ8E1cqH1RZC51NWd27ydctuawknsm",
  "key14": "4hNkbU4iFQCHX69uTtL7sDKG6yXYedPdqN8oi7FdKPv2ttvibKY7fVUEhzcn98ie6QvRA8MZEGGR1JdXm735LZ7g",
  "key15": "2eT4rW6hXEmD7Ej7xNer4KKWwp1M6i6MkJR5Xfo1nCtrPEUHPfdkDpsSdUmjvrfKv9UZU2k8WS3YFazFcrsvBkbf",
  "key16": "5taN2NccYZodhfNuRJ8WiceaiBWWSeEgS84KHVABTGCfBRDirzBCzKTNqcpiBStEjdiEF8fj7NjZtNb5Ks5wnqbH",
  "key17": "5Kv5zSxhns6GxBbLjRV2gBXAEtKvoXFLxG91HM6RhpjdAyVHd2H2wct2cYmbNcTV7d5vzeUPPK2KLLBiC5GmovSE",
  "key18": "2DXPYLYCNS2fS1UFiSEdqPtjvyzmxJCCLkBc52ffS4f1yt8oVbuZvjBLQpBpzR4HP73mmVjBSDqGoHdabhmsmxCd",
  "key19": "3hNDyjtRRnAiq1MCbk2mBJ3YWAMdV4qUQfuWwzxkrw4ivE2Q7y2K8iK2F8JozGEpQT2VLRMABkvFGvrMdSpiSorv",
  "key20": "5JBrevLiHFWHHjspNqhVcPDnbjRWYfLf8B5t1q2V91YAsWiLGLTdC1hA9gWWL3URwPsQZrMWUKSoASWVFZFcFNLc",
  "key21": "z2fxqSeXcevbo3G889NXW4y3nz9rRUrZT3dZ34was5y7cccUtaTDtbVrgHrRzF3yq4U9xcTxt4puB4ykteAPSjG",
  "key22": "3Btd9uiBxuuMV49Ksu8W3uLAANqVFGiTvvFwKVGxdGZWEtRNYtmZXHYyBUnZxRiNqSx86TVzAKn73L3kwYpQDSWV",
  "key23": "MgJN3CxCzjYGWbRy1eZXJmAJUoQWnWLfZ7dMp4HHwBJMwYrG6LTxx71V5muxBnESfoEVojrksfyesDgLZ7nKzHH",
  "key24": "2FJTXM48mg2AHPW3nUf6QM9Nft562Ef9RJTa5VoYsC5nnnQeLtdHqEAVv6Hv3JSXLsszeQctXeoiv72VQVsFREuc",
  "key25": "48gUFp4c7HAsnyxfwuYrTLcbAGzBJnHh94ZepLqsG7L5ZndQkEVEXRgTo6GdDZTnEERizinjGTswKmuHdDDSaRoV",
  "key26": "gPFdpu8oTT8A4Rxa8jgffJ5NERZ6cHMniNnaxu2g3SpentoHyBWi8RvJH5ngryABET3kif7SP8cqJ3WQGy6fjRB",
  "key27": "5MmYq2TGESciUN1W6vqcqcKcXUGwmwA5dyvJANkpvXfeWjWwMt1Fd27dzeabC8kAS6rptRtKRVFdhcJDWEBznWsQ",
  "key28": "2uA1WrYHEP9M28NjZjbQkRtvXuydtbSiA58nD7Mg6zqdhSthFv4tjK1KJm8qcF5yrmJhgrfr72HAkBaYx4rxrw8Z",
  "key29": "4ZVSiZn6PixQ4FnHtNXJpm7MjjvhmvF67YbkPCXshzFKqbZP3QN5HjKDdkMNZCjL1FSAknnGFFwqPi41DtPdN3nQ",
  "key30": "3eUtZKuS9YkbHL6TKymWNDVp22NCfsx84wo3RjmTYC3wFTGuCug6pUEd1aiKsrWG4k1g2MA6Q1L8vzzhnRfoqLPf",
  "key31": "4E4kN47rk4dJiL1roHkoaNbM51WDPVs8aCr59Jdnfu3QeDAvaVjt5pzfwQ6TbHnvkMnNifXnioHmkB9UdKyEVkgn",
  "key32": "2ipBwVVBYY2gRpFWckzrbRDd11Lepyc1riypYfF2YheyJHjHQJT3JG5ZM27xGD4wRsRYqEEr6PwNfua3emKoXGqk"
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
