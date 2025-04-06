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
    "66yjh444j8TSjg9u8eSTmT8KTFG6MHbXYLmxs28M61raE29j4Gjk6C6ZUNfLhBBVXvuLxfut5CVz2LdrsM2fkBRw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3D9ydPy4Huv2YsG7syKXmZwub6eS78TPA5YEnjkdqGpgpK9ne8h2Jydi3RgwQXAhw6xUZapciSp6bMxL5wQcqFPL",
  "key1": "4ssRacwEHPBCBnv4ySnt2sdwc4S4e8mJUq9RQcRD1WS9YcpU1JPKX8KyzxKKTL6Bsseb1jRyRCakNu51eMecsa3n",
  "key2": "52hV3XTJXD2J3zKG8DSajvehCzL8cG6JhXczd6g4acHqKzjEnTqxNqERK8Wq1QZKnZ34v7q1ezULe2tmz8yBcmV9",
  "key3": "D6qttGRh7A3GUaR5p5ymQgrKBMojD4CgpzZxY77Eo3pKmqD3YkYyYpT348enqztPiBhjL8pD5Rc8qghNDxDRwkG",
  "key4": "4HzVvruGRaHT4hfKYrpB7GwPQnCZArNEtVbjNfLNyPiZFuPLfRWSWTz4p5LTJssNVFFnnXzwVNZ2mrvuLsGP139K",
  "key5": "4JWHt7aH2SMTBDofiK2Z7XuLEFRrFSSmZ1HbVqEggNh4vqPQH8YVHPhckG7zWEQYUaz2JRomR4SPSms4ssouwAzL",
  "key6": "GUVnNqbKr1ubpZZvBuNFbGjdXrDaU4FES7PXxosWnpYCZBS95PTjXz7tjo4LStQSEjC6JqiB8tncP1JLEwuJ6rz",
  "key7": "2EWRZBq8CbCVpWsJ9nfi1aHApuJEAQTwakw29cab62FWVToThaJk6dewV7AenZW1fkatTwn4csMnUh9TGT8Es32f",
  "key8": "2sax2pTgYWkBAscgsKMaxALsabopP8xJ52JEv1Bb3zJbRH9DoE2RMvH8dCspQuVFcAZVD2cLTicg6qQPTXhiqxEe",
  "key9": "NRJnNJhndZRd4EpU6zCDqbQUC93mLnBQhhk2my4R7Rnb7EFv68mGswUnQU6nDFdKh3XNQkruSC3uUjKequ1EAy9",
  "key10": "3EmnWFaUH21p179TmcSGEeSzsSiRMSoE1r7ttMpSZoiemDA5us69JD9PxJVtfYau5cF1PJCrMjqkM1NRv1XTKJ2X",
  "key11": "46ZZGQSpmJVk2ryj171duMNJZRyPu3Z8te18LpkfhVs6Ega6w6uSG68LusfgzL3STkX3Po46N1Adcuwt1rBGch4e",
  "key12": "5etau5F1nQC4wD6G3BnVYFimtvoqRn5XMgrPj63N1ZGQnhvXwTZvEy3XVqFDuF5a6LB4krp3T2oZVoeRc4dCNGvV",
  "key13": "5vhzBAgpRxApH5DW1hjMJXAJNVgT4kC5PM8Zr6NUYs44j4XRVsLCu64neSRv6Qn6KCNRPKaFGHnBbtavWiHWhTF3",
  "key14": "5akTaLCVv18k58ENTU95diwf1N7XnhBfmrbJ1c2vfV4ewZhCS2p92HS1kpgHbUc9hmNjwsCbPX3sEQeDxSdx98vf",
  "key15": "3a3KRVBoEzHk4UeeopDGM3KZbfgnuP1k6uDPer12WF1Qa41abcCutpY5odQohRt9htRqzVn6sQEggrN45JVBBqRF",
  "key16": "V4NVPtT2TKSqEnRaVQRd39vjnAXeT4KGuVSuqQcUr1tAsbFEfNqTeTVLGjqjM2DrHL2TSUGBCzKVjbqPTZ5ej7w",
  "key17": "2DgLhB2gJmdoUeBuDtTMXowzevGff5s7Swkh9CjYTV1WHVzKQSaBDU9hAmFgtLFZWSBhL2JJaSmeEGEjjxE2b1CN",
  "key18": "4zKVb4BcxZBkpSDZhrdQqeL9ZSCLCtSsXpMFo4uKMiq7Ny93geSxQN3G2KLtJpnggTrWf5j3PvQooMk4eMhQNbc",
  "key19": "5JRBDhN96bC8q9rordbcVFfwC49eELvv4SLUfMd57SzysNE8ox6rpkTUautFfWJQQHiX1MZtcMPSViQTD56r7H5w",
  "key20": "4mGTVrNvFNPX6HRdPGn2j8u5MyiJERqZFRaNzt1PPEiWpD3Nck1XAttCpuzqacbN4qvJzG7FbEm87sbneEwR1LZK",
  "key21": "23Ar6B93ByLkGU3mW2pNYZBkTakvyE3CY6DgPuvzpxVYiQcvkDognuhxiyvtAYE9fTP3WPS7VUCSJ3CD1djfvQT8",
  "key22": "4RT46AQ7ewp6AUMMtrWPZkPeQ3tRXTAGGkowR1vnyGgaP8uyfLd79FtF95BV31K6UqNeQ9pLCxJMMrjM26MPJbRK",
  "key23": "5qLQnU9RVHjucKASyNjKHJBWGiV5Xb5H3GvHytPjoKS6jnJhgezMa7kjT8N4VGyeCVEQg81s5UeEKXr3C6aWm1vs",
  "key24": "Jwwz2f7hH8y44wvuCwxDLJ9XcQ6qr3TCaiqsLaSrqyzJGiwZ7ymijLTePPTyhWpJJqMLLSniVbf5cvBiepkpa56",
  "key25": "5qpDyJkUnr7L5kiYTCYkJwT1jthfx4For8x7QrwTYnKAJzhJAVBduaVxtqemVHJfgQYcDAhoZWMSipFpHuKDqzDr",
  "key26": "5Zi48pxT16cXLgnNx4mik77p7otj3suj442Po3VuzmyxaPzrToicukGw7D8qZfhSyuxGMfZ6aVrnvFkdpeSyqqAS",
  "key27": "2pGv443gNZPB7JgUD3oqmiyBzsfz1ExrhGKcv89Qj8B5j61G6Ke59EET6YsXsPpxkssXfdRyKHUFenFZUTWx7fJP",
  "key28": "3sUHAUs6z8kYb4Ng2pym1kwUnxcMg7Z66prbuDTHU4FRmnpRtbRJhkCzXjbjUjUwMECf2fSSHHd2khQygM9Fs9i9",
  "key29": "2H1gGruMawVQGXdUZd8siYe485pUeR5YJdQfoQPT2PCUSGxrLRNjvcsvXtFKSH4wJMpNXCJTzGg1bJ4ZBvTYDrEW",
  "key30": "2bP7D7Dem2ijnLvi1wexkxCSA55TtZj9KVRYR9jYgXCnBz5Cd7vzEL9GXFVEBGpnaWK2vYoUH7uiTaorC6YR13Se",
  "key31": "SexbAGBas9imJKokvd5uUxXgMQSF6DhnmY4yPu8izN4BpVEBucUyXE7LqKMgAoP3LGqPzcDnZeVreCgcbn3LoQ8",
  "key32": "2D6THD3iWkoW8f7jSyaM2FkNDeuYtjRYaq8zBs36AdySEnmN1o1wwsTYxeHz65aQ6XvMAa9LvLNFatnBM3K9aETM",
  "key33": "4fbxmxQZ6jYgw7zWvCUHbS8yV4VZZNPCjmheSv1BtkfhzTKCiYeMyrMS1sjvYdgQ28m5eQcq2b9g2iyagvnRptdT",
  "key34": "8oWhf18CxHGjFwB36Lwy8RVnVCDXu2s4tvjG32qZvUaNxtYY49ytm2ahcPaSGxRaHKf3ipMkRudFE8NEz4Lui6z",
  "key35": "5EzCBcqHY1bfyRdPorjX4BCMDCsJ65z64Z4rDki3rerx1WfVonyH1iDvkDSVGoBVhjGgPPcThypZhH7rCr9BmZyT",
  "key36": "37mpN6sHfoJCZGDGGhWU2gtrd7wpwGSNEhi38gzkHt6zUG1FUy31tLhQfbjCt4J9uAfMmQ9D2PssT9hip9Npifvw",
  "key37": "2wS8SAokBAffQY7o1L1xYXob6ct1oFPkGkyh22Fsk1wB9gZ1UmycpkNU54gSxWURJskwuN4cGLLMeYChw8bxF9Xd",
  "key38": "5RcB6x6Tn5sAQon2AYobCRaTXSGN9cVsyVRWtYCuyGmzTvnEnSkJmMbZpYRXyvE1ErYNyeWxJNXC9H8tuXonVo9T",
  "key39": "4mAdhCTcbAmSxaSGyWg9XiomTk2rSj9f8VnyVQtBMTgbQ7L7uKL8vVdh8eEsRJXNKtBYySRgC9XcH4D37dUJ7dKh",
  "key40": "2EE1v9bhGQhzS6UyRzZJKPf9EoQH3azm7XMcmUKYCWf7HubJvcYU3VfhP1s4H3ypwF1jcxxBXMKpr3gCmKmgXKMz",
  "key41": "4qiuwcfKV5qZaV8nNtbLpAru4WRBAJqB2u1kr1ariHhy2CoaUdDSL4DbNMPF4XmdmmvACd5Dima5XK2BVEntHVVK",
  "key42": "r1doaZw8iTX31kJJ1ixMWUyqEfcdoPuEAcvEgCs2fodhm2hn2dPcLQpVka1LCX5i45R5FHoFXk1css6WsG1KNSZ",
  "key43": "4cScjdhX3vo6WYojK5kdZgtPKZ1eYoQGhgkT4tDvYQpqJsSuH8waXufanSaUia566J4KbqAYaiJezQHvaCbwCsfZ",
  "key44": "4HitAVp8M7LhE6rpWwWtH2LquZvabpyGFWDXJ7uEjWEoiqs72WiPzdtNeDZRSen6Sh9kdi3oh17zA4HNEHDEVnJA",
  "key45": "4VSCjs5axGLLfV12BTaacUhrfKXf68h3HrTYDMEoSkkK92MtLbmGS6KspV75yCiKLVtTMCLWqawkyeEHSXaHGL9R",
  "key46": "2PDhDqBQSrG83kJYicFeuDwvgbrC3sNWYSM8Tims6jSYpS2qoUxXw2siEe4xieA948bCuj813kCMKJaUHTQwKLDs",
  "key47": "KzAsna7g2meDfUmfMbxYe27ARob4vtUC7mLJZLZMXsE6cAepbkH2icThStWKQt5VMVFV22Z9iJ2xpitdy6CZPBa",
  "key48": "BfPgTn3utnNKGSB3QFokqjRmC3ScSSTwKFrbyjsnoXrxHp6Xv42EXWbF8U7SCD5EUARdzdSRga2oPBTGwbrUoZw"
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
