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
    "gM4dSExMKMnVUf4mEhwzGLnTS3JeV9UFgtDp7dy4UAS4kg844w3QxALEa2WuL9wYbDU63HsvjWRiEAkE8LNAmnX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44Tsg3g8YjxPUj2qi3NYToVfrScySzby4smS7ut7PfC8t2iWKg7KWVwoHrikwBaqnoRG2vY45WYCzSSmvV3onxEL",
  "key1": "3BQnzxRQem5cx4bud6qRUrrr7wgwk6PvMC9KeL7YenLitJDmS1dAw3phC5XrdHFjTB5E3wxkTUE7a2Tz28NHWbNj",
  "key2": "27xtr376npx7QncrMdWkByVKe8aY33Ya5pnXJwz63Tq4NEo35ikoVwcwyNGEJ86vCzZXnqkEavBBLb2vhg4q4iyU",
  "key3": "658xDyZyS9DNR7c5aRJnDSNA67samrAVuhS5w14tuPnWfDaMrELkAsMA7oXP1z4tCx9XQHJH89KgNLniZmPeyW5m",
  "key4": "2DZ8S6BkkZUcLcFjacxvUc6o6QKPAXJVE2yBbhk5c7Dzx9U7KHiVL1J5NzafhRWYFT6SXiy8CXLY9EFWG1jp5gFa",
  "key5": "5nNKGh8J5aaZLVkCmCt4RaeMZr5xMxymgY49AQ9pHQeVPTRV7Tam947cAEVxxcRxtD5F29w6G8tVXzfc9drHkcfX",
  "key6": "2JsTTZon1AZ8hVSemAZ93Sc9CYoqcp8VsFoWsMd3XdvLdnQopLEGFHsZJUbmriiTNo5Hjxemj1xqz7deCQ4ejT25",
  "key7": "64EY1M5s6ZfWbosFXegdK1qkT6KqvGA9X8XZ3EezgNCs9hid4CvXWUtE6EnX7Ghbt2PDSGajJCzwWvesk7Y5kazL",
  "key8": "3s1VRZyrY8x1RuAuqSTVXZLVSNV81nAwFG6cUdTy3EemcagRpG9BPCDNgw95T1KwkWf26nh6ssHPSHnKt1YmtaEs",
  "key9": "6GtVG7UfgCvWkdsGzypxcJqrBvRYNm1NZ39edk29yF5dY5nUBe1QqHB5AaVHG54eFXk4jnXTNH5HpECXf4PAqtw",
  "key10": "37g98SGwGBT4XEoemr3pv8GkVGpbdK9vWXun7F9pyEQYNVzYNc7yVQ53pSQnYYcFh2EMYxUGXqh5UHziGyykhudC",
  "key11": "3Y2DN8WvePBeKfbLM27S1D9gqgPVaqeVX9wWuW64htYfJdvCHwCyHKWRCDcVD1gmkwBMN2sVTBQVjrZXTPqr4fpb",
  "key12": "2x43YkQGAHZP63oK6khbwRCz4x6FRLX7GVbwx4xWtVy5kppULcPPmri1yJ1gpurwt79qGgqXRw7sBfo4v9BzS49Z",
  "key13": "3kQJ62WGRWCeDopu7aJ7P8SdbZXSHdFATCw7f1rxyYBBL3v9YU8H33fAkxs1ZMXukVHzRpCGaZcezS5NnXxLbzWc",
  "key14": "3mVFnMYggStWan6vKmTvB96iRZPVEq7Suki1u6HkMGVeztpFZ75w7nbxtEiyrq8Sb76Zg72A1R7q7XAtJiqh18W4",
  "key15": "21qEXSsJ9WnarnvJjeXCnuchRLtFBL22ZpqAdeAukoGqbTtzzY4wHiX6g7Cfp7AaWHNSuNWw5FRjyywZi69VryJc",
  "key16": "5fyXfit8co7SfEr4hoXZzxXiKksEM7ZN8UveG2thNuXrHkCFQ2KcyNSJENqexXpnLDtRMnjbXSasS8iqRutQ72qB",
  "key17": "2ZVBLFtLxLiTcHmRrX9SXNTyNPyX1jaNFeY45ViyG2pu5tHFr5FYa9tVUAYBX6R4huwGqxHYhoBja8TRhyXtfvEJ",
  "key18": "544ipGzqAEzXnuydd9PMVrg4pwoefYVTf391VjFkim8NgyPbYj5yD5ngpAqX8WSm7Whx9xdbMZcwo7nF38RAF3N2",
  "key19": "4zi43tbdoK1VaWKR127PoUbv69F2piJCy18ETBfzu8gwLvctst4ER9PhTfHWQEV9SJZvDfsvubfHcjMwbUAW6GLT",
  "key20": "Y4WYZkjKt57BGXCcXBCLTsCc7pRWFhBD3sffA8CSKW9mcXAys6KfZktc2DEEtJgL8gFva2MdfYjsXAz9TX3qpV4",
  "key21": "26X5yqpC9zUju6kLE16hbBMemr2M5sXPURUykFoD5mHs6NZ7TCLcHp9BNQ6k6pLamXgXnX3JtNrAwGgKyQFcfptG",
  "key22": "2idbvdZSjhfCA2W6BSKkYUexkaB9y1ke2jrvAupoRsJ8Wdxwi2xnLpzyMrBpYG2FVswuzs4D4AW4qZM1mpq4ieQN",
  "key23": "4abjwoaxpNTkL4ZenJhKuJp46NoX5BUaQJHAwUpHXj2twwPP4Ksjve177Fe2XjmdGuPnt4hw1qpRNVkfFqRGxU7W",
  "key24": "3i2DG82rWiUJEDGUk6txWLAkD2a19rDJn5YW3eCBN1s2iYcNdDWgppk5kr1TCyT2ZBjBsxAPSEyiKC3hRjCPA4z8",
  "key25": "3kTFaJC6U64q3a6v5H4Ho2B9SRU8igWQ8aL5ztnmkZ4vvUe8tm773YQ1XUvncZQPoUzthdGqbBnHwstUQ8vxLzAU",
  "key26": "4aM4thvy5gr1AwisFF6oxQTgwKyXBx8mG7Eyi8g4PcUjC7M69zuUsipSasVqNpmKkuU6oNgXDAaKEdGHcWuCR6aW",
  "key27": "rGyaHcbndcZSfR58XMxc4tmjRqtji5DtU2F678B8okw5RGNeuSFA22rBtsqL1G2Psnaj9CPPXMJzKrJ1RtEB1vV",
  "key28": "5HoJZKc7Qc6g1x4Q27EmXghn1wpYUc2oedxnDEg7XWy5HK5HbrhKxtb1hKNNYFmraCXhgDwHtNhdp9FpHC1LA9d6",
  "key29": "6gPYypsC2ofjqpvDK9YKrbCdd1DvukwadgqjPM25RfLTnK9u2azABs9zd3JZQgSge3UP6VBqtXWztCNmVwKWnRn",
  "key30": "49J1gb3wSsVpvzDgNJ8xtCuTmWinumLdFroBdmkrFA6tepgxTfMKet1tDPqMmsXNfCeS6uwN3675ADmaDEPbmqM2",
  "key31": "5rhGGnEDP9st83toTekErPFF9inxiZE2HjNuyJizJuX8QqbsDenE4zeZpdhDCYbat24bHFsG1hsAmRCtf8A5TJid",
  "key32": "5fW5BrU471Xav6ftDyHFsauhekdfBeJ58e1DbCEnZtPtbwmyQ6MhrLjg4tzaK8zKmc1BW7hLdtMRUkTuSkTGTiRg",
  "key33": "4fDoAwcoTcidoSfu46k9ydYexEKpMcco1fbR1JJEjBxg25CHn5tLGWTS9mk4fNFGuY95PH3KhAm9p3DDU7bWvvpM",
  "key34": "5ci8tTE85pPhhtHQanC1fD7PAhrT4RpfaXg3BDeGSf3KqsrzG9BawrT1ELGTLjYA9hbtSdHid59rHoD7JWXPxfyQ",
  "key35": "4J92J7HvTmcrq62QAGH25RtirA3vvMASNtqZqXV7vEvPdYahoF7qb7RLrKfnU7TBs6VGphzx6Kffh4p3a4G5Fsx3",
  "key36": "4nhpAHAZjqXFyZjDJvRr74RYA47rzsKYouiBHRjTBfNWuJVUHWo85qRtEgv1yQmiX6EBfuvjufY9YaUqXfkSuQKx",
  "key37": "3zN9TguRxa8LM85KeiUv8mFBwfV6W3sDWpZxyMHKK1xMa6ciGFAjxCnG4ht7NCrGPBhzjNPPDmrKqV9esUpKs7TY",
  "key38": "5fHpu1mMeASgP1R8RMFz49hgXb3ix2goaCK1XYieLwSqua8SCGzpttcSZ4ZUeWokfxgPhNAZ5ZaqZ3d1mvHFYwu5",
  "key39": "2fxLzZA86ZkvQddsMBrK1SAMAZ7UDLRr11Jf8z3KAXmHhajHcj51T1rLpSQumoTXj2aPM92yykPZjyk3JqnvK67F",
  "key40": "YECJWtDJCohR1NUCVCrSMoxNqaRqZBHeagRVDuHpnB66y2pF3jex1DMc14WcFpudaxUhfJEiyzkFEUBa9aMbQwm",
  "key41": "2JyQCjJYp7bBJ2Cac1D5349wmEKD2HGNAZAFKU34ynesYSfsaU7nz7cFY9L13kpBPXVexQk6BYPegtkuF6ZEzNdj",
  "key42": "2kE6jnTxHuAtNupNpQ93mhKCrmUz7ttzb6nTBXMcadZ5jw9CqW4HotmPqViPHiqEUeMDmA8VzVdzSHFCWw9pmUA",
  "key43": "i7bnqJ7KgYBdsL8LzAvbXyQEncqrZJgkz7ZQPtdigJKrmPtnpfyKPYfWZZVZySyS8rEf2eRz7vN533PnLa75ZyC",
  "key44": "46s2Cu9CDdBnLMf32add8QmVBjWDaWC6Stpqo3rFMYVDi6E75dxSgPF7Z6cLG2XfsDthSRwjaS8Kq1NdRBf5cJcJ",
  "key45": "43UKRA38qmtxp5m59DvDwwfv2iC4rmGYXTy3jXCq69YQZm6DDKLwiXHESbfWLRaxVJEbDYNCQynN6yn5DdL2nFND",
  "key46": "BHVCWAW5G3EyWwGA8BGjnmPYWRZnyQgaamy8WLwp6UiFvEJmGsbdKeppqm9uohdiktwCdU6jLgMmAdFU5maKwx4",
  "key47": "4THtuQn9vAGMGtkouyT65Vw7FNrWTj8LqukPYrohs4PFqV3f6mjLroGDHwidXLK34WrhimA8ZpbB3WRRUCtvTbjU",
  "key48": "347nfS7Ephhdshkfu1jtSiKTuLfKXf9hcUxBoQNRwipAbyJMre9p2DcBx4bTR54RCJou2kCUaM6LSa5H8Vg1yD7B",
  "key49": "3RfQyVyAUadP22MS7rne6wxpLkeA18Sa3jiaKUgswZY58hogL2uwaHFbM47X3onqgsJ7LspjxFiySQSYDGPQMSnt"
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
