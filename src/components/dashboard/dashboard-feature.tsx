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
    "xoL16gVLywKN8fSB6JD6BGp5LdFzgsrumwVNR8bLr3PzNeXQFzJk6z2QumhcbvqiV95i57Sv61PtBMP6hH7jDJZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4AZMmeQKy32cSSSEjSqUFHVhGytyw3VQajx7gEvFC29kgLCwD9ZxHgroGDjZkAjfWwE6A8VbZq8m3kxu2WY4YCuG",
  "key1": "3eSLc7BuyUk91zFy27pa6xQusHtScgZfj6iv2ush5Y4V7icAtmgvDWd1413yNShxrrdp2WmPiPYfodQAcVjhFxtR",
  "key2": "2qRMVqfKETJVgGjWYxYgeX1sNwuPDqP9dB5p91hohUd4XMPvnLJovwnCFNrN7G38x1jrUz94dk2Tsi2scPvMguB6",
  "key3": "3k8zQGnM7hoRMxk5LAQheoZJv1PWiJV2LqwAqJt4557yJgmh6P2srmbbNwRDSsvKPebBcRbfYYboLvzYGRUxmAVW",
  "key4": "4aBXShuQQsF9Mfmk6hD8efqHaaT7d52QgJjbAG7z2eGrRg91WVYufS7DuTGDDckdXzg4ZRdM4FjJtHJ5H4GgTMMH",
  "key5": "5nG6PXf2M7LC3Svy6aQr8v52Sc3YEtwoaivQjPXQHTUcJwcmNMjBuiLmw1JMgFEBM3vneqiQKktfMRZB9G3hKisc",
  "key6": "fc31TrHCKHBPHwYVweVZTskeZQaWeLwDQmZNQN9chAErbwVCEo9MAQXFG4FwmhxzZfwe9WX9ut8t6ggBQSS43zi",
  "key7": "5PyW6A2JrSMKFYh9tLdjhnRnSTR7NrsfmoJcvHhYpRvMHhCUrgJ8StRiau58mRXP4Hgnu2jHvEMezUDxJm6zJh9D",
  "key8": "4vR4og3agXqUbwpw4QikbPtbEqssYH8GZAjCwuSjsMK8N4uH1at6b6d1soQ6xbEEcEhBN8XadZD54YxfYtmFtVYN",
  "key9": "57CTMeRcE8PyVrqn3WLNJWgfsMXXNY9ckmB4SBPogmKPgKZZHbQGV2JQwBdJUQhkoKjjUcdUcVJd1nbTVMJKgq2t",
  "key10": "3DFRGpWPYLb8icWgEDFcz5KiXUuE8RS6RxgMqhteZBXDXWTkKTdSNJ42LeJu5pmghZKdvkj2iicrjeNudVJZGBH8",
  "key11": "5FFC4PeMsYMfFgfLZ92TMgP1AjgxoZA4m3xwg8GCHco8Msr8U1Phf7nT4sNV8bJcnrLzakAoDjrJxNZibFmvi98R",
  "key12": "3GEHPEnVipRKHSmj1CrREjCzxtTcM1MmQAdTLFdimAWAwEvuBANQYNtH9jb3dHVQ8QBsavmE3AsCd9jmk7mfFqwU",
  "key13": "5fFRYhr4Yq4sEfqhw4PTFQ2Q6Gz92sogoEXhDX7engw2bBH4Qi1JCu1v9HLmaKwjDP2akQtghhdMTXL2vdS2Kyc4",
  "key14": "56TEZn1XBVABtMoEph1WUrvP6ahN8nhoSKWZwyoAAqevamdQ43vQ7cvb3peWxYJpJaSQgx77gqmNfn8RgaMmQDcf",
  "key15": "5JZKR84a3KMUPSB7NjhsEVZyMRpanGnV933zFFoivi9YzE52rEWBNbDbEZMqBmraeAowsUgmJTUfMtPSZS2VJhfM",
  "key16": "5ZvnFa3TMXCXDrvCorm3LWbBHv6oYw7U1BZNtPKs6zFuCxkRKDLmbgtWevcAtntLogjPMGhZGeNCUN5HTTgeNYE3",
  "key17": "4fFh6AXuuGzvRVXBdfokdRmTgPvdGEvAancip8hJjSdL9A7TJmJo2wruU9ZxafGLUDzTn87g6vww1s9Dw8WkWLH2",
  "key18": "3knjhziW6PF5cJ91evR53Cb54YGZoWvTegK8xd6GC6y2FKhmmy76EuE86fqQsdbXCvP3HukKFTfS788QHVSDMQsG",
  "key19": "3UK7yw36fAaAdtfPFTZkYtybr6PvGhVDiWsqbCqVDvDLHdrm4QZzhkNJ8SZub16jSzTAd3uTesvyJDWrai4MYDby",
  "key20": "3nNWyMNdQLkf2e5ER5vR3d5BSxBhR7AZGL6du1EPTg8uqGCf4ViLFZ6GUJAtgh4vZXxayqa14wBEo5iqjkV6AyUJ",
  "key21": "5zouGFUAqCR27QLn1T4NbsB2gL86ZH5dkPaY3mB6aEhgDJoBMRCBPKNV9BzPiKHRP38zu6eSDQoh2QJF7S4ttjh9",
  "key22": "27cdLHTGDitp23XJWmFht4giLhH2nWyPD2MinzokEiNzcjz76LSXsgRM9YFpN7huXpZPezby3UTbxUusZsihg2Wx",
  "key23": "2D3i4XqHtmZxAXMcsaFtw21GCAFWJfWWxofyUnurCqeHWEY5aNLjj4fZDu6TWBhVsMjTUxBNiWQrMVwJRbJbEMkS",
  "key24": "vSw5ydZgsxhXP1juM14bdKtYNSKNkztMxbg6rswRtWpBowuM9cs42TQMuWfe8jQuVMUbuswKLENS3oWqhWqenQh",
  "key25": "EP2hV1QzudHETiuNVLfM1TavrLbbmyPUDkcPLdnDyLWR6GXpTWcnRTTdKBymTxzdscLzxgToHH6jks2hhs9TTGh",
  "key26": "65kYKNenMMDpHfWzeXpQBkoZsKEizNFo75GL94rYEyVZyNFQFajW7cPvxpvrUkw4qLp3oxEQRBVMbvWpjKX6eMTV",
  "key27": "5U9w78sYgthg6UNLaovBnKe6U24VSKzmY4oK6tDKoYx75Zg7HnU3uNMKXDgTuAxpgKJZ5HR6R9jSLtEoM1WrBqzA",
  "key28": "DjnfZFbYp7zNQYbkcspkgCFA9n4wZi6RWczLWV2DL7fcHKbBSjZEAZYrSr2b8pwDSg4cCY9mUshRL62cNcCQcSB",
  "key29": "656up7AdpYDB8Nkc6RmYxMQzVAos8LjmUYguFSGS3SyhHZqMBkYNK1NfVv97kvspnMzAqmWecEUxbTasSJT338jn",
  "key30": "pcczhAFP7QLJno62Xz5mUKt1T5hW5RLx6ZYyegYanxDkBWZftwoHuk8ye84G8Uo6Dunq1sjqEFUv9VJL9yWdLmD",
  "key31": "3HEcqweRDnUa7sY2PKtDzD2LY6cyyTr2ncKLjrdR57WM8JYj1GDGLLc2zafHqgnELH4cqMhvPgdvkXJcfaaKb3AU",
  "key32": "5sg8SvFg6BRbj8FeQ7nkYektuW4SWNR5Rb324snVVTXgBeJus5H5n4MCoKoFjAFVrT55NbnHtjKvk72xctd312Ks",
  "key33": "9CP5UFBP8hsVjZtBByxmfHdgNkmXjXQoj4YuBbRWg2rmfFX2s7YCbHzgjYUghaiaxWc94UY15iUGV4XE7DQt9n5",
  "key34": "5ieNQsM8N76LfxNRtukSAXJyLjcscyVC4VfANo9fxGtoC9GURTX95Vzz8cnn9LLT7Rm9XyPRMTNhu5tNkz6b5HG9",
  "key35": "4TKgS67CgNbiaLanu11L8SDEFLj1S7r3Ggqg1fuLbxjvQCuXvG4YAeBPJaHyxUj6teU5pLk2iqsndEV75hXrRC2U",
  "key36": "RYkkrrjt6ZwD4SviLEyzv5dGx2G69zNZ3gAiQHL1Bmsu8Kum1eQ5nxvdr8rzW6XuJqdA2Sd89BbeMieeiJbXAcy",
  "key37": "2zg9uo4p1uJBDSxX1Z6tSt82u78HSmvYs1JCsTtpahUv7e2RYxPwUXZHqBAAwvdEUaF3rBh1T1MtF4bJVDZKx6hE",
  "key38": "4J3ihqzkcSfPNnQ355kE48FZbZFYGRWXPBtJvSfnVU6TkqBzRnzD4zrmaywRtwURTT68V7s5VBjiY3qz2vnjb56R",
  "key39": "5xPx5EC639HFyCb7SwKU7Z8NAnd7wSLSyr8uU7N5vCc8Z6Mgk9B3kw8TfWUdVTfHhtYR9jwc2JjtX44UyPwPdLkn",
  "key40": "2i5HgJdRceJ2k16N6j2iqG3eoTd99DiWMjqJdNY2GzM5ueHhygzrnUUTdvLPdSyReUVd7QsdaFvHZCUAzTi4FX4q",
  "key41": "QwvRMkbyyrXi2LkYb8iWFoPY8Lxb49RfEGM9vNYLt23oRdhabvGhPb8aKw4baSdpSWqBUPEZtAN3VxoXniwNfjs",
  "key42": "MNbGkuT9kuUQMykoVYDBFpchSLi2b6aa2x7jTBU53LTQf4JbPPGhn4nsu48FV1X5hyQwEkkBxWVgU9hgAar3Wwm",
  "key43": "6xFKTQ8VpZhUw6pesvRDyrSgufMg2gj9MfE5fEVthbNMoShupKnxDZ64pV93D3fTGDnxDSUTCRtmRqy25hTFEZg",
  "key44": "213bBdL8dwtVq3wisH3R9BYqGst8QoeuNNJym9WFhU1aLxmsiRZQ9Pv3K5HekjCEVknrUt1f2xzo1AQDPxUHKgBg",
  "key45": "35vuH96j1qUqiPsv3XCW1nh1m8p4Vi7Bjhpc7X7ikeB4wontcAxiGCm7yr5LQkFNCr48FcG9deeZNZ1cdoVqpM7Q",
  "key46": "2N6bAXtzsYG4VCVGaqL1sUoNoswz3YyR4FSG8NUUQHqxjn77ADa7cwsELbSZTNoGznaUcRve174TAE7ALbaxP4br",
  "key47": "46FUwWncEjHejTRyUiSwkaXANtqVoMLwTtqdJvXrhFHSRD1suibSSFyGz4ph84EWHrULg4k1Fafaz85a7Z8tgoPz",
  "key48": "fQ4RQJe4B5KTo7jAb1ehMbtD4PMeLWbiEtsDzSDTQVnjkviVwopJr4euS9r3jiRniGxNpV5hmyucwQ1A6EZgasJ",
  "key49": "3QWbiXLwtQZcvxKTFEdf1QZtf5ftWU4ckp1i35sfVUCYNxVdyzeBSabLdyBexrrEK66EFoasxDSwM4225y2HmkuX"
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
