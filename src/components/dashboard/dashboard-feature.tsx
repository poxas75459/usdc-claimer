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
    "2h5jFSkJAecRwsfq4Tqf15qvv7Expt17D5wixV5zBbdN9iXGmeTYH7fu4PzxprJeHKKy6su9knBgHtSBZwbmW6RJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4AaLB8YWtWMRMZRLNtwL29SRdMe1ry2i14toD99CDHM7pYQMVFu1VK6Hi2P8yHgccQyGM2VxT91xSDrLf8KkFx8F",
  "key1": "5Pcf2hDXDnjLob8GARLYH9xR3YyX3cEubVgwSZFVW1oeenHpLzW569bheK9zKxZJV5rSgrtwrzTiurBKmT157ehb",
  "key2": "4m5hiwGT7Wr1JaoPx8xohuexVGMJEDpashBKVxVNXhiNh2gfFhQVpaLMvo6zjxn5htspB1jN4JervNf7DqAJYjYr",
  "key3": "2CCXRtv6mi2ZvtBBjX4ZKaYktGALAjTvSwg7ndXciF1U7uwTedFDxthCxbR7htZko9AyWk6EBbKrSwJXcr8EpcU4",
  "key4": "2j6eVMDPJBwX8fbrpLuz2eg4qABd8DYDtKzoUtfEP7s6GxPpog6kuzQVGLECPbfhzPUUPsJoD5nd9ZWh89PNf1jo",
  "key5": "3hmGTCfDeMLQMaZ9mgM7J5J6tWRKLSBtB8EcFZ2unvzcAA5bh2D2ouTo2xoRQPgaLZqNXSjrBmegKpupTuuL8z3F",
  "key6": "3cdiJ9wfTojS4jY4dGxfdaE15UynfhxSPY5TNg4jDDpaKXzKSPk5YcNnaoBtxjAEfsr11MFB6AZaUXEMWoqbYFGe",
  "key7": "3igxoACwgWVCC7KTAK6XrXWbup3iG8x3yurQy1KuQNDoP93cDjc3G4R99rTzNCTNc72GNeS2uJHdU4wQbA3Jhj9b",
  "key8": "27ZD1Qj8KGGyzJsCeMGjGgxiSRP9oJiCRAQCfNvzjiJwywDK5DsXYfmBHapFBcPraQmnLh97jGQMrUi7B5PpT9PR",
  "key9": "3jWaZwchMBWoA53A5Dw4uW7LCAZWCQiqqhHEjs888etFy1JxZt6BBm3pQ65Tskxrd9pqEMukU74vJBufYdTQxUgA",
  "key10": "3LckhfCtcfnDyGQhFqesH217LnPD3NY1Wx5cAuQevjCB4cMU5iAiy8mds6YSBAdA1oUTs6z2beRFpBXVQCdGy3PC",
  "key11": "jFbrXSvAWBzQ6N1F6r8BKcBBLXtQJ8zU9cC4NBixW496hUsfQN48FmZYwa9ipy54gkzm9DgkakrcMXN596Z1oBL",
  "key12": "QrQzpioGbH4eMfAMadkBXLSJXuAGPrQ7KjBv2Rcdhk6Gkxj4bAneMPHsxmtq9vKPQ5Uay52mJJ4GpeV4dm1maa3",
  "key13": "5DbintoENYidC3o2i6CSYi6zAsjbSQvQXDnHf5GEqrAwiQDVsH6FLisUcR3iDRvXEDm651QHRnDxcYRmJTsVEAed",
  "key14": "59yJbpvEtPYoGPLjdMvdXwkQaFX9BrWGy8M9GmcwxvGdYvwq3A41dpkUPA7dHe4JfDpggEk9nfQXAFUJHYdnwtgn",
  "key15": "fxeFqZv75CqpfDZfnyY9nr3g85J4vC9fYETV7zxKjwvwmPdfzQ2HFixX9NYkcpXJcogpJdGXjWAoc4rc3eGm9qH",
  "key16": "2KeAPqtCVu18Z5LmTJn6D87GbU5U42voMW5ZQ5oRJ7yfu53z4a9GzBcpvi4atorhuEyanki6jBmoAowujX1YSgnd",
  "key17": "3FnU3GncyRzm3A31QJuAEe33eLSZSfvgAzskxWfJGqfNs9W2G3AMbSgWRYAbYeE8bqi4TPFsNW2HzLYtKPdvsL9Q",
  "key18": "3petYA744xo843yxtkrXEsqwdtRssR1hxffYvRXz4jSH7wzwUN4er7HHmpAd3naxTpY6xiCaA8xp1wLgjkFsRg9K",
  "key19": "654ZEv4uaZumxbAHi8K23PiMTjuTEF51Kcw7WvaFG8m3cLfJUC6JbBs21FRWm2jz7pefAcPSJGVuvGAFPUkZyUy3",
  "key20": "5xWivQrb3RFNeXjSm59tPZGxH9iQYB57xsaxRv819cjY8wGWCiSM2p1AiPQHwsF8AWcJFvXcVQecAopKrJ9FSRJ7",
  "key21": "5ER19aZ5ae4ighmYN4ZPPD24UoFUhfrtq8QK8RNJet6bRdFJtsanSaYhdLNMAPDKGAM9CSUvRaswE8uq7Ke2LCv1",
  "key22": "65DdQoAjRZ3Vwg9TU1Sam5gj3nJwfrN6vvPjBoLxLaQdrasDsxpQhscY8H8yidZZcoq7MFRX2CkdHsNQwYnKrsqo",
  "key23": "PvUtkUX8ZJRFhWQy82dJM49xxz84bGQXgyeyAF5Fd1mgftg35vNyo7iWBAN5ckiPa21heJ6w4efpDgZuSukkKhd",
  "key24": "2z2QgMMFmWVvgPZfy2bwJf8KAUhUbzPC26Tj56u7eykc7iVRiSfaj1JeEtjXjDs95YQBXSndyrBAnhGGU6v7fNv8",
  "key25": "5GFfAfRJcryPZtXu2guJszL8YRK1e6bYToSx86Fr3Z4wuLUsFypEgCn7Riq7jtKgsSf2NjZBaR6LUhbJos3yoD9t",
  "key26": "27KKyAwbNceSojBdmzjLrmf2JSoYyXmY1tUnHZpr14TmBiR5dg7aJQYQPE8yLufjbXMdC15vVixSH8dKoe5skaFk",
  "key27": "5eQ3geFtKEy8xdabqPDaVVn999aPLmp5NdpEovJbuEturt1G3F78w1A9NaPukBkHVzFhJMhPJ3NUJY7VQkijpMKb",
  "key28": "AB9aSEg2UpUtcNrPk2kVuVz67mxrQKfaA6TbihctLTQf4763AB9qadecyvA3AqxHFmr3KSqetyjnq9na7L97S3S",
  "key29": "3pZamK4DD5mPD1HpbyxndehCRibbU95S5bnibCtLZepUCYhxghNV5SgguNjwH81Bpd8t6rDk8tKc22C73N1ERcxQ",
  "key30": "fQnYH9UBSJV4AvMRAXutH4McRSs21S3vN4qEWok1gTzEgqmZpgFxideK1jx5P9K4QsQjwt3LtoHfU6UXF1k7Mus",
  "key31": "5rj6LcbHjXbeJB1Esy34ztwQc7G1UgFuAi3APcbYuvD6dwjRV2ioL1TLMBaXB4H7WMBo63NMXC2VmGmPFicTbuXR",
  "key32": "4ky71Hqm45DnTbdzEay5WorjeVZPYisxRjGKFkxgV8mBoDknf8mpBicty8KnLvxNeivLguKEEjDQxhbS6sFo65Xb",
  "key33": "45VWUJx2hogsep6DfAEuA3XfiPrT3JFNEtEJDsFKb59oZGByLnPtndb1e6rzx37f2MsFTfkT5TWAENS2aMEqkhvU",
  "key34": "45Hy3bQ29Tbw4ZjM6aFfVhkofySjG7vMDwqJjCS38TGTpkEpvAYSsVu3KJncMZtZt8ygS1hhAZ6WW4DhuaLvAXpG",
  "key35": "4wfPW1TJSRkdikdrpCfNDTYgPxhEhSox8jJymfXpVRYYhSEpjfhNuZzUcNkNK21zqV57CfZrUGS1LR9Mxppx21M5",
  "key36": "2ihoJA2ySMPea3XJFE2fCAoBRbgVdAztuXgCiDL3AMwBBcNUj5qGxqq6r7P4TGTscM6dtywm3SoUZ3j8E1ZvS8Kh",
  "key37": "4HhMQBeY9LE2EZFrwzqGFeKCYmrimasbYuZhfFL6yoWUm9QHBcZnZu7EGRoJro72FnjFQHK942bksp1T3H3QnXv9",
  "key38": "59q88A5ZRtqehbfKVTp283AnnTZjUgPXUa6vid6v5RGR7T5mMfL7E88uEuinCXbHmFYR4XSo42nP5AGK15sFbtNZ",
  "key39": "3t2djZwwuoUwxV3h4eyLf2aasNQ5zw243HMnWyhFEmLgh1LUkdB2fVwWtXuA3Z9boREfZMK2x2awGyT44kN9ntHK",
  "key40": "39s7f3FAxiM7ZBx5jnE5uiakfVWVbyxbzEHk3GFofSvdXx1hYtZbpxw3U8saYESeGRPQBR2C9mLjbUCUio85HUEU",
  "key41": "pSJ6cRAYCKFJo7ZLrfmpa6mejbfA4wzCdNyjnH9Qah2VtJALP5M3baCvWJXrgN6CBpP9pVD2sJYq2oDdAKYE1FL",
  "key42": "4QXs1yBTn41zN7qNVNPknRtybp9GGYv9zj7saWm3tEHESXfWQ7eJbxAV6eqE3hrS2748qT4k8Hoyx37AGygEC4JJ",
  "key43": "3JfRopND7ZJ7r6btZDESVeUFuk6WHFQbLoM7kyBiGXNWVJRt2gz9aE59To6DL2xELBLTRV9BFXcAsXJcr2xrydZU",
  "key44": "2h3Y4ZMRTwinsPu1oM8C1bugS6kxtdzEhqJ4fLxfhTFXoag6MJvEe3Aay19Y4A6WWLNKxxJabwafZKrC3Uif5uoa",
  "key45": "3RghdXRsEUdJZVJpmrrmRZFPS8FemfmCztqKwXZ76NFQAkVFgBNs6J1jPMKajEq5N3hPc79eqFrUf3dZ6PenW5eB"
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
