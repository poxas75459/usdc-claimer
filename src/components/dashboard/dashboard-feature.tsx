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
    "3PHeyeyyxtiNZMzg7MDK6zTcChAokdvDjbcnVqWGWvwtzV3o2JUMdff321buSfQYFSmizABXax1bDzkKwjxa47ky"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7dFLhVG8nSa8RguHLJLGhCegqouT3FK6NSuXL7bt2hs28UMrhXtaBCDM6bhRmsTRo1FViUceRQangv69vjfkHhL",
  "key1": "45FAZBcUT8eLapoB8ho63nZQhh1vZu1DTDBtnH7CgfEz3Adpb8dij5NDkqnLXyg7AgDh3K5u4m4VGkcN545EmRMU",
  "key2": "3jLiUW84H92sQbPnRAELBDzo9FoxjvXKMT3R28u49hxf1Ut9n34s6zjoCwSiyx8G6Q22xzMAHnQUhHAtbAqoJ7x1",
  "key3": "4K4citZALScrEfJ1Q5SMtAbaa5uQ91HdSrXNx2SsbrsH2S8xomArwAFFn7YXkPhMXR7qoqtwJwr1KyJxAEbHiHAS",
  "key4": "58uk2PGGsMxrYErDiwLfEhNrNcXG3dMsiuCFuzukcoCaDGaftVFS2CShXmw93HTY5rNuK5jAKpWZgiPHZWZSi4ev",
  "key5": "67CWpcdvQjS7TajBHmK7eY3JnnB3g9ZL9xQyKHUZYy4hvFuoTc3RJyGaG4qwKtYn9g1ztbG4nRrpmsinkCZ4vwwb",
  "key6": "3AQYNgEnirS7ypwNwwy3YKvNLvJiftZdGxxiphaKqa7S2yB5VwDrdma8Bs9otcLuUdxRQdWScHovATDW274qda51",
  "key7": "2mdhMgL2iEgLK2WUv35VURda2nhozpsuLLMWmocubpdhbbnHsEiRVP1Tt3uzoKSNrTarfgD5nRdeSmPd964wbGtC",
  "key8": "4XZhVXp3macD4QMTvfzKvwpoCUAnJkUmdff3fwa5hA2McK9JPYum96xrao3w4Mb88wTqyUkBqWs1Hna6H1XcH4nc",
  "key9": "xyMmWDVLf9fnM23s6k8zR9BftFBzkSLLEstxeujrmKMmAo2X48vEu2UxurYCSNeJP2bnhH3Dk8zMCcF2JnCNPt7",
  "key10": "5AeMDzJ7JRUjQRsM2ej5LPMNekphDxZVjrMfH4sEPbnFetRoxAG1qNcsUfjH53gyjVZKzQiq3qoVHmEUhtHuvkxN",
  "key11": "2aM4vsL4hFFTX9emeU8ub8ehKPhQnJ4mXjgJRX8bfPM5iiKasuTtjaFyaMt7oR3VaNEDzpEe8g6epTBaJg54qPEr",
  "key12": "2MaTpfnBShU26AtySCzh2TyhHzWm9CCopLcrFLazzw5KKHyJDzwXMgTUf6hNxVtgUa8CLs2LDLDzijGoLQVwRt2j",
  "key13": "8GJt3XDRHMaBYRq3x3mHs26rGLoJgtqSNYhNQA8T5kU5zy9uiUKKp3iWgJBXKmMrAhc8HetWoKMqTZ2Pms9pPn9",
  "key14": "zTmppcCtJRCGLRLwrwEzTTropqXx7cbnL6DoQZ1g98wkJzHWxXSPyd5wSwNQA9zq8U4Ab6LvZVJcjt9W5BaaZKV",
  "key15": "PFovU9WZXJVss5NQtZEgHsdi5McPgZj7xJ3QCwcP3a1GLTDRZH3n1A9U1vNM5PyM1824VNF9SNe2BM6DBaBvdMm",
  "key16": "2TsnfBaU8PN76BzYJSFZm7Km5Bfe8GFYwgmrXrPXdpbSdCwEtoosK8yndHTxpLspaCb7v8qif2NXUujLupfn2hAk",
  "key17": "23YQKvYckuZMCFi4V8MTn8FVJDWR3wNXUfD4ZEX4ad7JxfsvTV7q1h7Gnr1eGR7kGiWCEFpvjr1B8wo55ssrzZhA",
  "key18": "2webUBgYA98PBvjZAyV19KG4akcUcf9GT4CtakRaYnBX2xuzk1K2rRBxrzmzX5CacBC84mAGbbRDtkckZe9M5V35",
  "key19": "4d87NyViuPWueR6oXsaZrjZF7twNvGdWPmkUFEwSEc3JdfYsoGSogzo3hKXPmU3J2Jg8bQyuwYka3pQdVxGGmEt6",
  "key20": "CAGBDcpNg7D7mswppc1qTsZNkHxPZYYDUrW6b4SVkfueqH63gaX5G1Lx9rbsdRKuZZukc8ih3hzK5fCHBnYfK64",
  "key21": "48VxgHp8m7t8TSLwz7MFoDu9kPad4SHdSi6rVg3pCXxKVYNzrpwZQ5gw1oF6JGrBxDG4GxCJmzeYddeGUAe7tJAy",
  "key22": "63vrRjqmTfGeC6gEiyXtpgXotkyC4JeCVwJxTgBMQKT4rdDjy3JzjMtQdJdC26ju1yfLQRBeFk1NZSbQAuKwPEMT",
  "key23": "41EjPN1SGieGSravmRmNJSaXXZXWjzdUnja1b6ew7QWtAyNjGF5Viy1g8JtHWWgJE9KLcPJ9ZsnfZdU4nwJQpZSX",
  "key24": "4hqJX6SzxhT4pE9sJqk6pwH7HGUHusRovFYS4yDBfgJdWzKhff9ptPWAfFDBVRSvb1zMQXqG8qooCsmEV7NP9ZNj",
  "key25": "3QjteqoXMjaUQQRfE9PKFbKnHPr9SW8Z6eppYFPKPG78ZwC7c1bJqz8ZkLtEBLPyrb9u1JefdjRxTzvwqgNCDj1d",
  "key26": "giy4Qn57ifgKeakNY9hPxAYeGnLF7dx2ZxGfXrMpedDXwFrDCJetDrJXLM2g7813NiPXXhXmbyEpMF5sNVHh8Fd",
  "key27": "5DgSs2K9LrcrfEueUpsc6cBQSHnNBAEG97BuzamfrXBMFsdheKUZQntbbS6TbjA7bWQshV8ydPx34X2tnCB5yMqS",
  "key28": "4qUUx2GJYyjFJv9E55PeFenMZoV2gzfZo5pwUgKKsdbGz7msGZrjr5agBqeth1ik9appJEmF39UedbrCJcYMPwA1",
  "key29": "5CVpRt7vtXV3PbtkZQgnYtxWwtphaAvt8XL6aBgNez9JPquthYZuvxCtbziuFZsAkKXvjwPztRnah1uq65pmxbp7",
  "key30": "48JvDdHBQuANAPnncLGGTZ8ASM8gCPphdunATcVsHNhsc5kZTQfJA5zXmifqsWdeve2JBSCtDi4RstQ1E9oN5Vrq",
  "key31": "5g2CzePm1HU52PueoLPZ254c3w3PXMmM1HoYmmXofzD9UYPd7Vaw8sPV1u2qqvvf7Rb3XTBc45t2aJkwEvZdgKa3",
  "key32": "5b3wJf38AS3t7TjppDtTyY8vzXpyy6JDhzvYiqhthJHpMgwqH5T3wUn2zYSTdfZj9o9PrtZVHDWtg2d7SZwwiTGf",
  "key33": "5XFMsJK3iCsYTHidJcQDYNLgrA64qZpG4j6iyZQuhSLR3KiST4ceRujsniJECEvVAnyTNaEEStTFtGbcFbWLkmQA"
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
