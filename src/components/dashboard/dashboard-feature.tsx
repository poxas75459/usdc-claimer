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
    "4wCPCguXz8nANRNrZavLckJWN3TSYeBnSc39raUkBtAE4FyFDNZeuctCeJYv8auHaWPXgeXeroT73d2wtZGWqkvv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3whRbPBCaPVjYSrxdCtsHnxvtgDPYhTJq9NrZRBmrSCDamwW5Hig8FF7vkR3hGgx9y4nk9G2Y4qRprYjP79vKQmF",
  "key1": "62qpNbY9kBsDoTvpB75KxBzavbm3N8icb4s24Jk9Pivp1KZpmvw8ECRiG9KuY56cYJnm1BgsQgRKuD3JmhEHURkc",
  "key2": "5QjN6tfqxMcDepHVAYXudDJxWVp91LvwV24PTSCQxcB8L1c8D9HgZoKgS12s2JQQKZhcDKPf3VfPNT9TMrqDnXpb",
  "key3": "3pBNABQE3exJ32hS546Pro2NVjurJQAekGCdXSnaktWZSRpxveRAaah1REbN7j2jb745EpFzMUPTF46vJWUYdshv",
  "key4": "67d2X9GVFKCyxatW1p4Lj6s6iWE8z1kAku9AXtRMXPEKmhtFRfrKXqhwmjVhffeR4FRdQRN3m343vBaZPkRRJpmQ",
  "key5": "3UM63BDqfnp8gWK74HVVshKPgxVDreMHZ8hzwCXAvYM5v27u5crScsvvSN6nmVLURuY7TFZhh94bbh5tAHEKmWMM",
  "key6": "5nneXhVsrzP6akKBrkgg3XPcwNLaiwR5CLohvgZH9MJVMngvf1kbr6gtSgcefQGYwXoxjzPMkqLe6oF7LtWAgdBi",
  "key7": "2bqJKoournsEEtNC8rSaXTcfBqi25CUVbDToy4VfWbCFxoCqqkyqQ44JpZRdQrpAnyeoJxGW4yG3qnv82fz2nTVf",
  "key8": "2yYzq5S4pS3YqZM9YJEUj8DLvr9QMjdSS9aDoKAGWQCnVRPNRhJX2ofzQTgFqh5qBxKGwAyMbZiVyKv3xQ8zkVH7",
  "key9": "3pvUu92EdwESZMup7Thxw8sMAtNvJsRAw4tf2juqWho2N99UaY6P9zgAh4iTy8JGES68xFaMDmyMziC1iE73ABQS",
  "key10": "2CgKjT2uMukf9zUfZ2q5w8Xm8nDXF3sEqebEyHVfCwZwNLqQjtkPGAKuVs2SwMWsbzQkfm5Nm7VMuJiHpTUQ9aCQ",
  "key11": "hwaneQWHfRExdyPJWsxnvfUBqFFt7xQEtCjH5T5EhSoL8nJHUnWjXjaB8SLBc9f6wGUuQMu2jqSCy8ag7zzSGaK",
  "key12": "5b9fabpxvdU1CJEFehFbJmbv4oQkc22NqpmxfJAMGzi9SCmmaxQXopeqcs6Eoc3bsTuYxEHD8kLNcy7w36j66Jsn",
  "key13": "2CBYMBn6b99WUVsTAnsFPbTcyfdXLdVeQPF4jFXnmJCveXY84qRKTpB2inY9RtYKKpSj9pJnHBG8ofUHu8zcPcv1",
  "key14": "3xqag4eDHawQvLqpzGXxoMh5j18pPJva9F58mjvzPPwicbjeJwSLjJErRbKJ9mtTWy3e8qq3bQXwfDmN1coA1p8h",
  "key15": "Q4xEwmAohKguViNw2nGGZYvK9czViTsswFCQTyhatYh8mE1rucct9k1yQwrHPfmA5Pdsotj1p1wFE2J4af98akn",
  "key16": "2QN7z4qKkgXcqG2zjnAyigAE5FWSYhnJwo7k2oQxHHGSmSojKF9zZxcWXVYUT8XNvDwKQmp2WdpzzeU1s2JHHf7j",
  "key17": "enYGEc1wsVeVPSTmJLXydkoEouvPWHKbMTdW8tcMuAaEoHJ2rez9QTbAEgwKgqQyCNmU6iwmpjpDjVWnhdmoNbi",
  "key18": "j5Wk8GvdcSHAMCsjA3cbvFz334kgNaYQKgyq998zmqK7qJvZNkkWb3JtAv8wvdv34mbM3GYwVQFPuYh8YJWCeN7",
  "key19": "41jJL4JQa9yC6NBzNRSizsUUV9CFdh5V4NjR3KqZRukxHHv7GpdmdkhWyboZHKCTEX1ST4QD49oQxrMpUgxvBMmT",
  "key20": "3XVGzL6FBddLNG2fqVydM6tZdJezLXairJiPo8Y9j9K2Ww6YuSQAcMVgRnULExTiV5yWzWoJquPbvyh2fYg77GU1",
  "key21": "39btDZ84bTmoAbPLEhf2SE9kk8pgvuaU3HjMwRebsDxFhnJRnhX3jEWzK78A1reBbgN6wDhwSyRyQbepEChurXe9",
  "key22": "35uzEDmdMCdGpAgMaP5eu7KiV5xFJo6AEYM9gYNwTr1kP1bFLGJJGzDzkEZ4PgLXdvZ99jXqNb6pTDsJijUobK2t",
  "key23": "WdMKgUce2XRQfWq6rDfv9peRYymkzER7fsqZSDdRAnNuZJbTqfsgAp3MJW62vmmBFVQKSGvkzaYpAvt7JGNst8X",
  "key24": "3na6cXiEL4Gjoke7bK3MtYFz3qASa4tAhdjKRK5VfzpKAR2DMUo6R5S5eweYVRW8LNL9gZSkweDDtYN1pmirpSNA",
  "key25": "33Hhu35fZRxoq7SQFM4FF7ifh6wVLaiGSetypq61cboVqJUDtj1f2BZgyq23X5VSmY2cooXUqKmJhey9ubwwWC5d",
  "key26": "4HSm5MEXtwdoU536J9UCg24kBDwLWp9ebTdaJSVh5u1QJFXe8ELc6hLEy2xteoHRL1aPNus6DRthLgsjFv7wS5HF",
  "key27": "yU2BpgQtUu6zATWd9uyCPKpcsMCpwppb68Myu6qn1drHQdCQuhvcM7mvJpDNdoC6befakq6Y3FM1eGKo4gkmxcv",
  "key28": "2MqCzQAR7s5tHnutipE1iUWYcX3eqgpGG1pjuVQXp1YwH7bnnAjiWm2vyysjEJRjyh6DS4UgPqPnkCpjDfCPoEZd",
  "key29": "412UWi9hsS9RwemEQ7krWYBRZVyaMxW7HkUp6P19L9YzR9huJpjMjkZ1xmV8XaKEyMiMoDhmZF8dApAKzH9JRfQX",
  "key30": "5N8Ari1ipkfQTnQ4wLgopLAG3CJNY6rt2wHSyjECaoJc6Jf598NC1wEkskZytdNcnTX7Mbxu7cAqonLmHeAHQEv1",
  "key31": "5FLwQqwRCsziA53Utf52ywD6vEvxwGcWMLvvphtBzKTynHsnruYEJbqPL5T4qwAPJb7UE1R5mZGs6DrXEFJYxm4M",
  "key32": "syWZNXhAxm16AYzaw3WgnUhHdJCrD6GWj3DS4w8Q9XiMwFZtpdvMFU1Ex5rrC4DspjuiYxhfThYzUGZCvrvoW6F",
  "key33": "4AQRGL95vMLL1QAz3gPZyZ8LYRmDMS7UXcGujGgUfzrPLnNgnmbr9K224KXHWQNZLXtKayFeVg7NqQyokt32VWeN",
  "key34": "2MCAVYpiiTKxTFqcA9CCGXFfzo4cJz16o5zr4NBVC3qKun8HnUs3DW3cPPagbfNh3TfbYREY7DGkQr4gTy7WN6hr",
  "key35": "5djgd68dZ2DfofvViGzGaJQvHYN42Ee7V6eAMoL1YM3jewp1e1wmmVYSJjanK4yfVxxh9XLb76bbRNDan8XsFhfd",
  "key36": "4Xh2s1ymit29KeRoJQieFXokniTyB6ipL2LRJjAy3tVLJ4bQKTb5pAiZzvuv2NLWmDwMM1svq3mkaF7EAxd6zn8h",
  "key37": "3PoFskoBfqfbmiTdQNX8kvCJYeSNcQwDMPxUDmVsX75EwEMjW3nN5HdNnE51YxA2m2zmQ1W6RBMi5zhtjwEKjd2A",
  "key38": "2NRWMPd2rDUCQxfeVYajPGJGu1ChaQUxPfpZ7zongRtZ6QsbNuuZ3BCojo3U83VmTSeWMuUP4n6h4tNWpULsxkUZ",
  "key39": "23R5zuHVLhXYD6wbiGLLbUUEgcjXc2JhKJY7XSnvGATkEohtj11NUT6G6CiUmJfPwY6BHZ6arjDqcPp4E1LUpXWG",
  "key40": "4tbm7wV8kKLuZv1JoLW8k9KKDFmyXZymQDaTKXrFqu3EWLa8UHtk1CiFaQNorYuknhxDFyYBmpBDwK1ttF4QvF7e",
  "key41": "22UsgvDa4GB5zjbxU4G9LKG4scRtXU1apQcjsYsSDDFtyTt4GGUyPWNnA2c2te4P5JaddqBUW3nyQT3gdn5LtQE6",
  "key42": "2117P3bNANUXAtU6QNZxusoTAhp52yVzhygiSPVHZFFkYMfXWVx7tumR3WgwWm5YVW84v4wu2sAn2TPpo7tyLkSa",
  "key43": "3jD2Ws5fX2eG8TXKQNMt2SJzyVtaxGacLvuR82ypZhTdS1ZTuAJjxhagbxBNK77bcy2TuCVjqUU1wME7umVcpHPG",
  "key44": "3T32RU6CQhwkLMgs1mYZXDPp6aRty8iBJzoKw9QFwdZUZvkAaQ71jp7FFUE3FAgberTLxRqqAe6oRpR6Lbr8wsir",
  "key45": "57MbnjasPmdjwVyetndcA2xJp9GWrNe3s6KDx85znhWBQLquTXZ89nJ87vvaBsmuZgEH3UXdTJtHbHH1RcGPSHBP",
  "key46": "c8mgkoaUcU4nBG1vDUuS71meUr4xFGDvNHpVHzd1HHV9kQ2b5sZSR9Fwonzn5gQLrJCxgZSJ9ksvXFHiPB9WuLa"
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
