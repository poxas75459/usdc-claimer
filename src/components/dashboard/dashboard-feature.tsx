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
    "4SVPFxFCAi7mydqXLxWodMB5CKMwKEPGRvjYYGMZ49AdtzV3ie2eS9zCqBgeXJGBUPJGbLritCaDejWgu9WUtqrm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Ua8vgrVETTkZLo3Qt1xoseAYArskD67HszC5zcMfEQhqowScuVm3TgGHvXWBhY7LG7bgTKNnzorYB5Ejmk1bwyN",
  "key1": "odFHtmnUhKUytVaAMgUMEUyio4UpF6BEKmbRuDvgQa7bgtGJs71rhsY3eomDGiTLaQNR1YA9zVKZiN1WiyBxLSk",
  "key2": "GWve3fC3nCJB4LMREB5ERDqWMzBpc5sP1gpCeTUkduGVaAZ4vf6kB5CBteUfqaEUPz5qzQ88mBADq1f6Eq5Lsdi",
  "key3": "2pzYdqzCP3dpLnJrssF9BgAJVqvmnESXuE9jd3PrH3LRov38FBCB6nfBCFip9Xa1NWsyFf4TXvJaa4zPTN8QmmwK",
  "key4": "WP5xwhSZJvDuptL4N6PCAiDucaaNBsG4G1CHrJkpPrnNjkiZ6uwnhbRCduriZKKarXMor9tEPTNkTuLxawYUMY4",
  "key5": "4xWjo2ifpn56JqoHcXN2Uj8KyJrEodojqdH1P5fe8fb19sNBabqgfWDKtRGjp79LNxG3MDXptJsGorSX1q6oqjrY",
  "key6": "wRRMfVLnPCVaJLVZEsZarQUWsjFjAK3EuCWBobMxedTEhcKUVQR2VPsqTDMiqNcRnrarU6fGF3QwNct2KX83QxP",
  "key7": "3CaYRL31v8mnrJ3dEQdii9742vhVEJyckbvYr3nvkLzqEzeAVMwWuWueoDihFhgseVNgfdenxQytGZWaJJqLYoMU",
  "key8": "2TkevhKs3xutmKgq11GGt8555GwFF3zX1c6bFEq6yWXRfFgHLkiTgESD2gsmDpcNwvuL9ZETLFxvnquTNmgkkbRw",
  "key9": "3TS2zeG95bHHzTezib63bwVSK8oaoHdZRaJiWZDfJsGH22bxVknGFSJfj3JrhRUja5bHbrCUZros2cA988MTeagK",
  "key10": "qQKrN4u8cL22Gjnt2Ptq3jcmY3oJKMqFHFFRNeXifgZCj8edPwNNdPM2CQj5i9S8L5DzEPgiJj73aGytGiVZK1k",
  "key11": "2Ezbm1jmMSu8sTjpYUKaTps7cVDFktMnZEnHuSNNETGkdxqPt7vFYEuWvousUQ8WxV6dPxW86Y8JEB2wRPNRerSv",
  "key12": "5wh6agtRkfj8mUarkfJ5H1cKGELDSRozeKxsWyKG61AJ5wLGyhSWaqkueGMHaU654NP1Kaw2RbjmFRQNGyPE1upc",
  "key13": "4kuxZ3CXvpYbF1nBReXHUwWjwkFvZG3ayaS6Q3WbRmM5PtqPsqCx56puEYxDxNbW8CnMhJNNusfsWLFQ1MG5R6Dk",
  "key14": "5gmx6xaL9QFsdeUjNFcvgqumUWr63WRZBkhwGNYWE53nhHMoJ45htc2Nd6ETFvtyPcMcX2WKzmg4iCtYXuXJam7m",
  "key15": "EmHxGEtpGKhES2yETVazbS19fgyeyEKEzCYHyMChwCS2vCgXrZmFirrzsjECzQrWHw5SBTBQgSPJumz545EkfdP",
  "key16": "C6PMEby5g843Ez9cMaRMH6YEixeLptdpbBYwwQVbxpmHcTyD8MDuspGGonBgZHBGrNj4JhVRSZa4nbTaumThYju",
  "key17": "4E1hCerrnNGBT7d9TegTDhk8dNdF5ikLP9WThsj7DhgbbzVL5hFQ4Yp674GQKeMXFbfai12jhTZVeLFkMG4B2ymw",
  "key18": "4Bdwct3NuYJXP22DGxjWW9FNmfJzv7Ep3ModvjpC55itjJXNdDEeUJvo9J4ft61WHnDdEVKYVBLKT8dCm9zEXCR1",
  "key19": "xZnp1GBKhLm51hbtppUrXh4gujXr2feaRsFokjnP8WXVk8mcK5Vrt3CqbSAdJ3Rk2dTcxZmoWSk46ZzKACAw2NV",
  "key20": "3L8dZtdGcor5BL8s5PHkf1iSxFKWUbX1bTSQMvqCoUApATkUDTXLUP3vNQrNogaNGxDbzYn4AbWLFkb8fK2z5UFN",
  "key21": "28pUAXhvpgHjBfuesgdYq7dPdtWtmQxSgCzaY1a8tprY6uKqhVnoewWuX1gAGoaXFgX1R3Qx9zqyFiP5LfTZPqYS",
  "key22": "CBNXhRtWvoCbpXRNtKeAxqS5riuecaGdwsPbopsQUg8FSgjsVfcHZaHHSy2YkP52EAh9p3DCw2rfFzbLkKVwXwZ",
  "key23": "cZFwwNEaMPihUotbx4exVRY3u3xvTYGBoxBbPod8cX37Vm5aGYwYCDZAX1Nxeu4bVLq7H9S6zEsTRuhdozH2yoc",
  "key24": "WbR9ct75acZuwsWz9cmygzBpUTWhxqijnMH7sjHyXn86HLEMfBPbMxKaPnZRyGD2VPtLH24aSLaJvxVgHXT8mxx",
  "key25": "GNxWJS7ocp2oyqGhuxJo66wcoNBEMnxFpwnAvcJQAws2iR7B4NjuPHMeT9HW6BWNSshU13iNfWykidryDkz1fpq",
  "key26": "2jCPTE1b4mx3daW84ZZY5Cq9E4NeDZWUFpSjwGBZTbB55yXSGgT5XCc5rYEuLCA8QYiFTZkhchaNAUK2A6XXtGZ2",
  "key27": "3hHeiSATMk2qYFQpvyebkdVVdvaHz455RkBkZaA3qWtENgnFt5bQekRgNuEs8s4cnUkRZrYXyiT6iHoifqVccU48",
  "key28": "2ChnNwr5Mq3q3YXSsqRbQDJXHj9szTiKs2JMFUfZHo6TbXZcjcsZG354XFbqpkD1hUQCZgeKRmnoaAJp39rJS1d4",
  "key29": "2zPhWpo8uxtaWxC2VysEjHKmysb41NVcu8jCT9Vnn7Q6UccNovm4oSZan6huNPP81mQhpFaxXoHXctUBzjksNGj5",
  "key30": "u4uys2du9mQ3CqVMVv5PoVvTAhhwnNcgo241bwgCaZpXRqGosL9trpEDt1b47ocJX1msBbZiJVGT2wumuYT9MqM",
  "key31": "3D9risaosGfG53xPMYcch3v2f6Jhx4y6DpyfVrqKDDCrvTkUzf8YDrx8YfKuFKMURbbDAHDPMbmDQEMLWh1Zt73C",
  "key32": "46btfFPSFnd1AHzkjFxJV53tfWPkYjtCeV1YiHgZYiSA7GLu4ALdJrmwwK9dMawD2PfXcN1CGbSgBUiTcXUnvYD9",
  "key33": "2SUtdh34Bpn1Dp2V1GVMY82D9ZwjDz3PkMZhuyBNU3ZNTBFxYnNepSPQtWUUD6u9d66pgdamu3djhphrpa2FaUAm",
  "key34": "3xeVVdpE312WzB53MmKaT1u2FNC4hFjfNamwpYYFp9T5nFxikhJqiKKCiy7MCmS5Bau3PgGrp2QuptttNtpsFWa1",
  "key35": "5XgdxYRHmiLoqVuyw9fH455NBVinW4YQnDhJrA4hesoAg32BPHTx8nHS6vkUU93b8CGDZwrj5RogMYWAAPYawcBf",
  "key36": "2vCE419SrEgYkbq8KT1BNe9kK9rHLUhCVUXy8P6TQxo7qFkqkLM38fPBQMUJXTUFqMRcBX6qF8KRLdpaw7doanrz",
  "key37": "2wiz19sHp91WtmUT9dvEGHnbKQZZDWYpEovwRM3dDyzA4oYU5qmrej62MAFz8vabeY5JUioSEQF5xqaFcnkAHbDW",
  "key38": "3z2Ngfm7jvX3ZhyBjXWWXNnDVDWwkb5qG9vBbpKHkpSzLypBTaV1EH7jYw9AWHecbinQyqJAjGP3TPh7EwTDuWGv",
  "key39": "EMZ9NvkXPJLDwkNtwsrp1655kqZjoLDRhxXHunPN71tn82s9YudbdUS3WDK9p7qfJh43zfzEJUQoJ8XNAyHHDwQ",
  "key40": "4H7mKsVDbMngsmaVr2FCgj4NEFTGSBHVrExXEtNiJDEp9PRXfFsYzuujXf6cP98EyM7QkogmMYXJuExBxmX9zWUU"
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
