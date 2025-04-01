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
    "4DHgAiwJPuT8Sqt2VeLfvWaJ8R9hsgxq4YRHAq63AWazHn2U2v1rPaFZzke6d9vXemvgt22TFgJd23AgunyS99fi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55NsPsyBYExhXBoCVcj4631FPrvLctcUWp6Ew2E6JRz5ZpRbwpB6bURkc7k4hYJCTYep74nZGgiCRzgXDdpwv5dA",
  "key1": "25Q6sHkAQJcxY7wrgZoxuc4ikKKQp6VZKspULy4oGhkUWLnc16g2Cg3xpZ9vy6LDhsY8jrW2vf8zuDzGnqaZfovp",
  "key2": "57QKF1hYRrin6DKtRCxmsh4LD2HCKYkSuHutAZWG4xu7iLkZHTXmb4evSchiJFNnnqGbxeM7Nodmki5BFHJY6ma4",
  "key3": "4FBoXBwg7Tq57DFQ91HMkn1SnuF7LaaXJdYutckEgXFsV6NXUMsfVJsizC25vJiic8JVuzssq5KbP7RusAZRuky1",
  "key4": "55SisuufqKH7mFhLD51mzBGoKyT2qZx3TCovE19dsvakxacVT32NszU7XRFAaUFfpk6pA14Gbca2NMAstarw2hAS",
  "key5": "MaC94MrPPahxUSx8P3oSjYsztuFaiJvs68Gd9hXhaGgQvmBaTbE8fL3qvv9oS2R7SPWvR2H761f1Keex1EqdtjW",
  "key6": "5ENLKqqsC9VYdEeBVxNzNe7VfV6h9PjUYaL8fBuSxe4bKcusMijS1jx9GaDEEJbPMt2RuUUnqBNWG4fRpwJNRL3U",
  "key7": "2HHJtRrqG8kSVsXSA6JnbctbvLrp8tXbW3VvkUomemNmXZXqvQTnjg7gQkbDNZwnesKH3ya3DXjGG7nxgEuXGYb3",
  "key8": "5rPJbAKkc2CRHWiv5NevRYYmqQGLjjzvFr37kha5XxLkCM2GH2zpoNJWFVnQXop4NAuPUcFHG9MiwV2Q8X2reLER",
  "key9": "3bdHhWVR533Gm82YoiLxc75pD5XjnBqZkU2GUiSzyb8UX9Tm2qofYaBMf5rDobTGaAVztBRNKqrNWCbKMiBH9feA",
  "key10": "5Uf7YWsUkLnWZQFVSvb9gqPHKe64PbPJix6Kq1mTNqJcbi8A4K6b3AxchndPMDdUMLDdmz5f3anP5djTsGGRrFhX",
  "key11": "j6M4YtQPxkWvH1haEwhmhBj2BFcR4HvW6oDuzGyUbC98ZzvCEPR2ac9sY6uKiDw9gfGSBmRicL5YUzpzYWwX7Qp",
  "key12": "2eJ97Rm5N8D9eQRKHXEPyZdiGjizNAh1eDBX7MrSMBqqPed8R1EtutBRcEWURBTXAJvRVH5vbMDNioZSJFBg6n8",
  "key13": "42UVBEMBfqXbKbUcYCJMoMRCPUgZNKSLyH1wc5JFah7LvBd36cAotPZE8fjiMN1JAprPDDnAbUS3DhNwiojeubcK",
  "key14": "55QwcNNndKfL6PU1s4skKNjnQLHF7j8PrKUdcDCYHNvQtSPn8t5FySFnyoo334ZByyBwNzu815P3bNq2ycXFfqVA",
  "key15": "Jg5TchcL11guQv5t3t6BsPCbcdYC2svkWKMtnXMKsf3PZEidA4avx7a4CsVurKFSpSkvWMKEbVvorxf87t9gcPA",
  "key16": "CUBDmubtLVGxhT2Q37kXmctdqj8HbHcAYKKDcxL1pNARZf4yzxoHQWvQnpAndxZi39stgYFbgw3pvAfgNA42kRG",
  "key17": "mGPvRhJPPz1bSTL5tEY3eqr87P4948u9CP9GmDysA9TTLLHrebPGqZU8GzoSWfkfbZPR9GubnpNvL15zdREDET7",
  "key18": "4eznTjj5weNBeDGya81N77knHokqfatDL6cYK6TzeZtjR4XrAPHhF7M54G4eFV25eW3CyZMXwsGPeCc11LaU2uNe",
  "key19": "uUNCXhR5poZsmkVDtV3ActUnADquCwMXgoDioK3cRFiE2ZCsvzup4tcmEd2kKxxvaWCtwtiVtKeErMXGP42qMR6",
  "key20": "2io49Y5QVTSaNWGftbEYtJRXkTsAWRtTQgMTgjvKpKjxd3iuDz4Z5GSAz2kMvoyw28HXN3n48MMUBfZuAY9EoGDo",
  "key21": "35E3hnwFNtDY6U8SsD2Lzs7v9aDUXq8RUkpqxhaUWMXJyExJggdQmLdXpYCfqPLbcNfQ4to185WzNPQkeEFGpr7P",
  "key22": "3nvnUizjDNsFs2Pe1tHBKYywsjPhNYbEtx4mnw4aQvN29JeGAMGtycSnQ4WaX3ZfQ5DuyYMkLDFw2vy8cWC9GUuT",
  "key23": "SyZHef2JbPNNfk91Lram45boj7mi46pMKrorXfxfjQPHw2JG4AaWWWdEZ2exoSu6TdX99orbDPrWxcphKHPXkta",
  "key24": "2ZPUBMPEEefsC6jKxxkw8JN1cfeRmXHp4XdY87guhwVHAYmndENmfoenRpz7VLtyxNKuWBJSFfwpkpXLz99tWuTS",
  "key25": "UNaqn1gMovMEeriK5ZYW2YALjg2PGrLQ3ouZbDyHdzbp7Eeh8rHpR4QfuUwXcLc3j8rC1mSuKBrD1XBanpwKDvj",
  "key26": "2c6skhhtLR8QUi768YZD5m719XtMj9qW6dNMLh6R5ckQR7DYrhiXyKoVQge6MZdkZTXoAtQGAxnYbiV3EcNorqLM",
  "key27": "4S42gUryCSZjZQqcm4VAT84GLNUjWbTsBFajsCnZczZFAmxjZYkNbEYwz4yHdqCtG3m2nwnEdkeb8KAd5EtCfYgP",
  "key28": "2FX7FqgJ7N8E6AbANHZuTmvVA1cCSuswP1L3uV25mvfjU9JxuzSeWLg58hjMWzT2SskTff8JrfNdJzHS5w7fBDyJ",
  "key29": "3ovQVRxRBEuuWcx8kjXLT4o6dDAVswajq41sFVv2FoLZfucyEUa4ceyh4vuxjP8WZ4fFL4e9DmrpMWnG8RmkM2JC",
  "key30": "2TaMg2RYArVYjJEojtsTJrd3Fpof9uSuKaiaWQUJD987surCNcpE8RuNu7onvvYPj14E5Pa6ympuTfsR7UPJeWXo",
  "key31": "5n8NoN8zEmJ48Xig1pcf6EByftL6XfVo5HAThkYj6shLAbYJG3SWPaTWeWBUP63UJrQumuHTTTLSmfifNE5H4sjA",
  "key32": "2xhL7eqof19MXFrmsSQCcPB1GXcXYWVtfmH3NnDrLdCx74DFxh4PqcTT1goG18wt1yKn7bvfbvgu6ThUVQY4GZqe",
  "key33": "2PNGwDVDQdgAL7qDsXdDRUx1acHbyLTxTm2LkTvzQC7JKRh1hTQGq153HJsW4EoARNviU3yY7WKtSTtwRfKj7wAQ",
  "key34": "3aVMjUk4UKwNF7icKwYYU5DbSoGmxHT8wBnXNaeWTHwebvP7SB5pWca2QSWNZpsMb9JHdrjspA6oD63pEndtGGMh",
  "key35": "2jsibww5yuRmTpn5UuxrfY6ZdVvAsdU2PjuoRvMjGzXgSMDZWzS7sRsnV8MBKcp9rgGP5jykvn6ErDfVDVPDkyRq",
  "key36": "4aadXABT2hn2CZM3P7omNHGyqPWtgzAhQujPwXrFGoPCQuVqm3vDL6g8Aksy8sVsZv4akE1nG7yakcMMqevmdgoC",
  "key37": "4H7f6oXXUTBSzfac2KMX5V4a5AiVSPFpgcvABUwbfbqaxxDHNmVL64cc14Ck2gzd38cAFnXqdvy93rksgtPgYKBQ",
  "key38": "3HU2Uci5dMwU2jj84C5B7eyRA343nJh1bRq6U2WwRtzhsU2aoa9AbDnqtErEw5zGYSWCaLZ1FMqx8sAgGejrYtSV",
  "key39": "cKCnBkZYz3qwxMJe6DMBcCrU7fntUvo4vDEoyfMtPQ2Kgz8qaWYvvybfngYdjZiNCckXy7JfoZttFV8kJcYDawV",
  "key40": "5Af65iE9Gpi7Fg7U6NZZDct3PXPEWBntxLYLPVQ3S2b61mt45cqVgcfaqFFJBPDnNVUfejHq5Nc4FBQneLybvyuL",
  "key41": "5w8ng7N4XHSUrbjTLUKiuhUXjT4nE2oZX7hLS6NYRmcwx2TiLAWBbmUob1Q7wMJYm77iasnTH1nbJZ6x4g5HghRw"
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
