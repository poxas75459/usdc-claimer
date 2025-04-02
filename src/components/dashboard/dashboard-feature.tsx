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
    "55Ck1QAuzPUTNW6QxkhgDYcbCBj2ixHi5LiB64aeugahGrMkKXwSkvrqmdktGsPkZLM9joKtxRVWiqzCJjLiRNZC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Y33huYt1hHgZkwX6QgkAzFR8bkqt9YHoAFnS9aKcbuoYfCLA9hpXRqSfQm84HPEp8coWYhRDYnE2CvJvTiWpjXR",
  "key1": "3NsTqYPbW3fS4XprjaYzA1U8hXbgkXfXD4HXodfiEmz8HEVmeba3agNpZb9gZewwYb3aseRLhZxucY17mVNuy3Xo",
  "key2": "54CXzCpXEY9NHGAi6x4GqGTN65J84w7WRD5rrXxAzfzQBe1TUvJysBP4XDQSDzip9LSeGc7o9LCMKkXVEGtR9T2j",
  "key3": "21NHr5tah8UVi4JNrGvYZ9kd6Gez6y3CVSHFuH8orKA1hifNwDvpvGhyGKtXB9VxRxAdbBduDYKvdjg1j1RPPkER",
  "key4": "2gJmURw7i76FmCFYeyBbzBYdpGBWZs1A1VQ1Eh8GN9ZvthXeiQuykRutNGxkZZF4tSs53UxsJeshyNFY5QYRFPYv",
  "key5": "2ExtVekFK8ar7zkpfoMmFV8ZYBgTqyaro2SVZK7f1v2nv4fDjcCSAbkkKi7nRyaCHoYBefRPtseqGuwbDXGLag9J",
  "key6": "2FuyYgCe9PNvWeQZadrCwuvTcEDwTgQQ8rmb53JMgJJsayAw9Ww2QXu8g73iPzj72Tfvu6fegVtUbDTTACBL54wt",
  "key7": "3mTYBjujyg1ipihL35Tq9ZpoR7vqqA3775hjp3TB99KGNQgarMBtrn3bWnpu88mD3pPJyWgwS5g8AsoGvA4dtjBm",
  "key8": "3f7mRZUrT4Yj1hLeKDNv56buU7L9vnFskPSrWKbb19QzxoDMA2MtJmwr7vNSnPc17P9sDqaytpXiQZa6NedKXHys",
  "key9": "go1kXLuT44nSnjJSQstPMmg1UjWYNosAYvEgcepTMTscDtHJxaQphUuiUVAw2kdpJMo9RcdgwcKj1oUrQbEzBky",
  "key10": "5Z5z9Chov45zXkxHFHXz687wMjULUUMts8BUuXP2XuynqkfSsL2ZcH59JgzC3V65q49ruFPJ58B8KkVt5fLtXVvv",
  "key11": "34oQNRc2kXCy3wLGzNoPAUWVJsVkz5eSDhuXFPSFsCBvrEdTvWbRYuRYCGeB71t3krMPicTABeQvQcWW7E25Y1ev",
  "key12": "c4gRogH1ahdjZQ8NcfNG5wpaQ7VUnPrm8mjhAxHS7Tg2dDXK2fSEqsYqmbDVo3p7MTX7qkfj8bVcEb2VvBVfMzT",
  "key13": "4YY36DEmttyMtshK2A9hfDdgH6ZDYBrwDaGgRBuwFxSPr68kaR2SsxZCr2speVyEWYQa1V4WMk6GNxzJSSJe29Zr",
  "key14": "4YDDniefRocb7kFGFnFJ3UoHKoApdoMdHk6U6XM6rYJQkDA6qHVs8mkxrgmpz8PvBRFbjCznyp6QtaQS2QutjppX",
  "key15": "4jbUh2XSW499NPqDGuTEJkCTnS4RF3PYRJThnWmWGzSWXNYssHX97oNRQ9885WW3ED7AXfNGQc9RVG1Z64AWTgQD",
  "key16": "bUxGgTRWjmhEMhZi8vCKp4AJ9sbPhU6pjfw9aa9h5CfYo9ckddCYHnJd6sDGzz9F9iQhYJq7t9FZzyFZ3zT4XDU",
  "key17": "3e3qqML1W3Ci8gzek3gpYqz3ygZcJpZkfxQm6GvedFfTTYYayfmYUFsrBTGkBSYF5Y2XBXxex9rvmdK1jfGTB6Lw",
  "key18": "29gqRrHAvBQ8Rb55iHgvuvu1iLcCZM11nMSsfJsCRa9LjnqHyxZ3Tv1wMu2oAdHVcp1hEPKvzctTf4nS2SDAjYio",
  "key19": "63WnuaRqTAgFgsCpNZfasSHVSKtEzLANdR47ra3CqAV5S9FpiVofuDKsX4TfP1nHTqsqGJE5aNMaxG7W39gZSKBz",
  "key20": "faqKZwiCRTBkzvLdWEiaqELtuzXvrKSjGwN5hpeqdXUvbBc4RbTAt9qs5px5Hnukatk9eVyvTAQnmdhR8dgcUiB",
  "key21": "3718TupZJ43DviLmVg4LN3btyqJYm8w7KLwkkj7z2fm2SJY7rmyFBDqhv4Ax2xt2LAooUXdFQ8DoV29j6zrEKHZz",
  "key22": "4cD9W39VkceKrKjbJK5Cqr6Gkp2V2uTFucqyiFpp7t6nw5vbDPie5wHtxdodbPnYMT4JpzFqxzm3hxoYi7w4Bsq9",
  "key23": "XHKURLT3BR6iJzbqAcCLdSbzRW97qkgjJiJvjEgHw7GYAq4BpRXPb1NxBmEZ9NGcUFre6GDPcWmBsZ47VWsJbU8",
  "key24": "57ETojoHRR8vs4A9KkwaN1EPXGE71RCfTNb36BnndvrE262VvnE9o5wBRgZguSkeXYPJVPgsdk38rUWzhjk1EStg",
  "key25": "2d1ZUwiGiCL2HaiM82UMXrSTYWNbwn9MaXj6gqEPfWg3kZRhg2xSC4JnPurbyfmayK8Mb1G9SMkWz7zcZDimSrhs",
  "key26": "3oyX75XY3cbkmxB9c1fA2tntPVav7SZfqU81RLqZKuLPsobj7a2PcctVQFAiWUHyp7oXGNw7Q5BfpHoTiRz4FWtN",
  "key27": "4GcndYQhd4YkKEmWy8ZSKaapteu8BFEiRrTKVCaxEfM7BFWbbg12tttG4HDztoaynrHfjr53peSRBJP2yqypVKW",
  "key28": "5mYVbV6Q4d7Lrcovxbb5PSi8Px8ei7fi2x1c822aJm3F8aFoV1WRBdkdyL2keGJLrASLHq2UcULttAjRB9fFdGPV",
  "key29": "2EcLDjCTPExN4dht3VxFkJ5Y2UYgrPLqcvk7RV25jtXtESjKshQTbp5qjtRLssSSnNQAYUYzM95pwrdv69Pu7jwE",
  "key30": "5PoyEw9Sb13UQBL4hienTm61sDrKcCtK5suVwREF2KmPkyieHNxYEV3o7MyMkE27ehVqMVrPW69jQNXQQ52iNU9G",
  "key31": "VMKVNR9WiGgC3xYEtoM99KbP2PzzzZ45KZ6bWYNdKuxsdbHZeyNwRK9RrfrzweydMdzVq3ru7hy6wVfNNawKFnr",
  "key32": "5zdCdgeQuRg9BFrFnPALMRfnut3RhPCLJVpSHcVXqsgcKFECqdySYqvd37CP2GZN7jhSDASVGL44164aCSXBeYky",
  "key33": "3PYW8e3ZVm8m3VxfsLzXRLUy66AEjBdbkDUMo94p6cHRdvCPA9uL4hrry4T16k9kUMAxzBus3TsqRBqsCMh8uAKd",
  "key34": "62ekvDrGehs8MWe7Na9eVc21gaY9i6ipf4Y5eCch2PbtLPj37js7sufskEoKPUy1c7jJycBV1m4b8LUnEmS2h6fA"
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
