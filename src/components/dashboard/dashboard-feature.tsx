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
    "u9GmNKLGtf8if4YvJwPKWJDgeEusLR5UprZ5AqoesY28T3F9CC6BQn87WH1tibHu8VCaU8PSJB6HdGdTRbVeWsa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3iZuGougkdwp4J1471Us5bjhwHSdFTwcPPkqCig2Hi5irX6qKBZuZDe8VyhbETbHtq8Uxhfy9714EedmNHFWqLZj",
  "key1": "2Tu4sKnaz1kYwcTLn9zD8B2f3ALAiuC9BSs27e5hCggSp9LZbUrpMcSqLAX4rxJRFXhDTdynqkRi5EajUHySPgjL",
  "key2": "3vuKNhyNRFm88qGJdzc2qSwyuz4GMwNjA3qAgNUxYJy6PAuwSFQTGLE7vPWCEcujqNfzjwg5rDtmvz7w9DLUgXsD",
  "key3": "2ySv5eGH6BEzo12qpyddmp8bqn9KF1QoysDjkA5dZ67pfiVWdDf1DUCKXiw3moGyA6D8WpN2SxEKWgEC4BuGRGrB",
  "key4": "Q24chqTEk3s1BqEwgzEynZuWuJGLBmAs72zeVM7vv9e5XSzYSEHsbRCh3NiDjT61VHNpLgqq8knfPDVGHLDmzEj",
  "key5": "2U6NvXV5FoU2uS3VvMsPY44Afu8QMV68A2MFNWvQ1RwQSxdWLBSEME4sz6KWhFp8jQ7VZZ3S7G4Su6v45nego762",
  "key6": "2TbPj4wAFBVRo2ddGaxdhNfnHD1Td7VyFcrGDZYnToiubMKBcqFjHvCJr6QeQ8o8MYipc6qzhgaj8uAHawLE4WRY",
  "key7": "23wVi6hM5cJ3wcKbydeTgweVB2jZ7wsVrdAoXa9NyMvPAz9QX2ae5FuNR8YRq1WwCAzpRcTcu4XqWjULVqhJUdNK",
  "key8": "3h9JANwVG1XPossPMZRRp1kNm5Xm7s2inKGErbQBUbpz5t9BzqmpsQecUfQCgWMCLG5knDuLawRrwahKb23J9VcU",
  "key9": "4fYGPGWvJ6A7QVTMQ5jM3GJWqgTcAoSwicqsk2TruhK8zXWSg8U2vRYyvLivQwiP3h6g43wT7rjw2Kfjoc1Wx9Bt",
  "key10": "5Uy8eaNDhkBaYxSxRsciHDYBfNbbsXsbwYQ457tyigWfnYYjpZoHRU8rosQR6kVx9GxLqL7CtEH95XV6jCWxSY3E",
  "key11": "5W2oy6KDxjqyn286gfScG5HBK27EHqePKZWPpotG7p731cgA4NPYTNVCudkEXSg1XuntwbbScZis5v12ubWRgBer",
  "key12": "D5MgoZAFPnXFFBJnRzUPhcaNSPqUGBpcGTUFG7LTxDFsTokdbpjtrUj5sBPEhspKPVB4bHsdZppGjfMMthc6qgp",
  "key13": "3KqyWfxRoMBs1p2rtW1Fr6WqBoX5DxsoC6gipRb7W15mjvM79GEvFeY2RLrEQxaMLeL6pZbbgB4rT5KZZZZJidwV",
  "key14": "3kAJQ6ima4qDTSy5TbACtiVY4R2Ebi1fzniPCj5QQsGp1253CMbhs1rt4YUiMaYnTiJUJiAeZk4XH3odncWr3YjY",
  "key15": "43ZGiX3wL5GzRWJtHWkUQcorgyDZXiHhqyDqgoQvA1c5b3oj1ABQ3c7Za1jzsPaE19Uh9T1fLngkbxYNfBRpM6KC",
  "key16": "mT8CXUm2FeQgB4my3AgkB8TNcuGjeoJ6iDzgK8bAXyrpTHVkMf69bC4MxvvHKsf7dScLiZQiasJFZkPywHniZnW",
  "key17": "2t6tfdydo1YxBz1FevAWiYAo2F3Hhd3wKqNKFXkv5ktvC5YTWjrvCUVwjtKLhFD1TFmMx3EgPAWcETR4vkk24QDu",
  "key18": "2GHXEfEfBnCzD7gDiyB2C5URSxp8sD8uQbDL6y7RSMR5cFMdvMeCihhCA47g4AQrHpjsXrXHTJwCHPzMzYcrX7nf",
  "key19": "2HDi9f54yBLhNLzbajeuY44X5w8bEdftRkUQ9d4Cs69uwdcW67TeGTW2ppkoKuuySmzTja9sf6uXWyeA6uoh7APv",
  "key20": "3bnYCbVyyKwDoV3gJq9emuzdgJ17gXd8C9zm5FSrPNgC1usNq6CSMUJK1cgn1oMxTWgyRMmkx15vVCtpY2vFx9bS",
  "key21": "ax2NhCogSoiDNUJiFFnkdEnAGSPJZ5mka4cWHZFr2kCMAjmJofqkr1n5SL8hReNs1thKg78YXJaUVCnQ9BVtJfn",
  "key22": "3j56z5ekAanSMgjUfcmbgMvDXbpDZb9dSWZUHv7CDHMnsDyi8KMamj28DHev3oTCCbdGkXXAAzRCLpwdMz2J9QfQ",
  "key23": "3ubQp35NduDJ92bZr3C1WBjJmxDh1gho6kNaiMdiidaqeyALswbsJpmndat2mH6FFpbVmxaaFM7FPvqsAx1XNiwp",
  "key24": "5H2uf2Z3ppee4SxPBs2LRZetCEBHCCLJcm6JmetvqkQSCU9Ah81ZoUAtCMjBvBCbJSfb5zvVCTWrbLJHwdgVCQ5S",
  "key25": "4jFF4diXf9LMB9F64nKLPL7dBticHSooFdrDRuceTqw3FVCCDQ1HFca36p9cPTxJJJZh6Qhmhy6s5AnbNKnP9Xah",
  "key26": "2jLmySAJeG2KKUu5qru7zUb2vhTnFJRvzDjNR7nC1EyCAAoiW4acWbZQf8VUmR8Hd3aYCqsywU7BRvqSygJn4KiA",
  "key27": "61kLncpUUzqHriuHMouKjdaNBu8te54oMQTxh788msHakJjNy8mnUPC2vhNeamX6UqPbVvVfDh63oXHdrYTHd6ND",
  "key28": "5AbUqhRFUXG1eGSRW72KtMxRd2k7RWzT8Eq4Nz1LadNeCcV6a5tMULVR8FVQS7KbzBVbGPBEHb3sahvTbeBcTzcB",
  "key29": "3nTRcQDeVPHntiogKaQpJZLuk7aDVN1m37D8R6LqfFfQDkUM64eZAwDZ5PvQuqhL2GWycExUmLih2BbHz6bcydhp",
  "key30": "2R7hUWohnkDenLUnzWNqQqkzF23r1mB5C6MXshozYrjGFpGsyhqM35fTM1t4PHT4MS3tDmQq2EtoEsACSNaWDZ41",
  "key31": "5WP7Giqxn4eCjLJ1FZ2fRS2ADtn26ffN8CArPvMK2ML8wme3V6428Dr5yk5cdy171UrAjsnoXvC78HSaW7UQEBRZ",
  "key32": "3UgVzG75G8pbfz6ekpT3HZWMJBv4rx34QwxHE9PGCRMNACkzK732tgMxT9ttuNYCtHWHP8vbiE1gzqhaXaD9uCZD",
  "key33": "vXiR8TihDjMhpQxBXHCCveEb2L3Q8EqQPBKHDgi24diFkyJU1pRpG9ZEWRrBnSo7BzjDUNLfLqshG8k7FREHtjJ",
  "key34": "LXGqKAT1uP68REQxe3zMMq5UcqSkZYcDw1bwnnuBrcJDTkeW4Wow448unkKchEV2awQsYUtuYtKC63gnih91Mj4"
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
