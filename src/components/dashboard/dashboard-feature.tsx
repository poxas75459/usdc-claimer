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
    "2zFZUZwrFs1VDtHvAqHCKCzXyiYXXkC9kxnMEpPhGHqgXA3k6LW5rxij9GvTPfmUT4MGBouSMGUtK8hmyxdRRgQB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pEVTyhWjawDJmjZVqvhFpw5bigwfScWPi6AhfqXqvp5k2EdxADzKxXsodWxM5S91Vmrm2DLijx3NAr5Y6duvSg2",
  "key1": "yqr2hrQizNcFKt5a1XdBwkdnAGaqKDbbqoHRNhv1CEJXx6H7U32ES2D3CiMkn5cPTRfN4ieumJuowfR9pCnvJQn",
  "key2": "3vPR6coHPXUDdwTtZBbj6R6VUvaoQdYn6RxPgTbTeDBdBjMGAjLjMArX4YPCiXPYCcWdtsqBqXwDeHn7GC7yiXGz",
  "key3": "3pzy1yQ2C1g2ARoiAwm6XJ8GFuuTxk4Nrz27y6PtzH2TzTgVz4c7FfbJS6xc9VSjG9GQVUPE44KsExMms5gD1ESh",
  "key4": "2356YZ4iKbMkWUmWEZbHmU4CY2kQWwkHenKkDdfD4J2WXYUTgANZGaKFmVwkDCSGvZcsrKVXJgrWeYNSA1M8JCwJ",
  "key5": "2rNe6WC5vdHE1ZD5TF7JYvWnkuh1g5KRMAmKrRv9HbbVo1pvnqbGJB3rokEDh8McZtjujgqbABqz7mZDLCpxy4jp",
  "key6": "2NxrYM36zMNuphwSVrC6PmYGsujSbXqefrhPym9HNTVCkDmz2ZutkRuRUf6EMccVihD8ajscTowwt6jPnJydkFDh",
  "key7": "2GMiiBtbwjtjF8oTg1ECtHFSe9Rm2a78H3i5fZzD2YuwRtQi2yPaFhNjsS8aXcN7NjibwfgnZdSRUMcB3og49ru6",
  "key8": "4MezkycwjzsAyDnAAnFhKaZJVs41rRM82rrabyusVXF1ZU4X3DTVCTkCdNeCCyzoLtgwVynZ4J3anPDErZpujc17",
  "key9": "8bXrxDA87G4Gs6FCBuuJm3Mi1KgDqurbjJToP7GppPxC49ePWJnMYq7A8CF2dhVgcjZywJP1vRu7uNiLct2MMQF",
  "key10": "V6YZDwr42FoWG3MVXi7Yx5Y2eyS8csUrqqmAgNX83MuoDxHBSjh83ZeWNtW5vv7K41uTZBr9xu1G1DrYKBff3hp",
  "key11": "5rDKnACXzPWD7x5KJWu91vWjcrnmRJTcFYtGGCj3u225zcM7XgAoiaEzQHTi91TtUMa5D488FEAts6xDBaqsnw6u",
  "key12": "57PyrsF1qc1XhH1UHW4jUAXPkDoPov4KZhc4JZgpdx5eFUMTq1TUAkVwK5HBB1P4TcoExay1C6ojWfjEbDxH9zjN",
  "key13": "4vvVB9qSHWys2t8HmogiB2ag8EZ5YYDRdUuHWk65M7EXK1vEeiAjqy7odghUDmudr4XGL1gCubxUACNsVXDX8iDR",
  "key14": "2qoa7C5bmXLx3uP7KiS1cgabdVbfsURTWXGrhxgHfSRx1RQHgZ2xYajmq1rZX4K2dTF2UymHJWrFqzuyLNgzin83",
  "key15": "4CRNrgTYpmWJzcy4czuGK6w4UUnK6HpbJTTVqpxdfnhQMYK8NDmCz4cfA33LUBZiKotuyxoQ3ficP1iXcrVE2Ve9",
  "key16": "5d47NiMD1VAeaBUUXor3Q7xvzuH2RyymeV7o7iVmbtWntQ1KvkBbFDLmbPtS2hyr3a5PR2EaeRetvY1nWEeRCGUC",
  "key17": "3bKgmG3FWvV2BhHJb93TsdNpn6YWj4VKyErp5qgEir1DsG99neShWPRn2hxA8tkpKtMWd8UKvCUMUcG1XECaW9Nr",
  "key18": "4WYnFbYPJnC5FtqbgazXpwfVfUePQF9GWr7mKCfGbnLJUui1bAKUuEWtwbjhdZAqPk6YDvhnAXhyuZSbk5v3Laty",
  "key19": "2hPotM7Gt9DU651D6myHYXQ92UqW5KABEzG3xpsrHGXmcsXi2PdN43AmBEN34DMbpu5QRW84ig4Pjy6eJrFGqciT",
  "key20": "4hVqwSfx25Ra4iWAFjfLoTG57FKNhibDFEYXWaUf4Caxm4Yv35v721xysM7hTS5CaYZPukMZFdWwBLJqbcyLfv9P",
  "key21": "WZhwRwcXBjZ2NCiPso4uJbWj2zLULattEvX2LDAD5Aky9RFDmr9NNMimtfK7gJ5B2mFF8vcRjx3jf3ATZcgaNLc",
  "key22": "2Djiz2rvQmNMGR4Dt98YEFWddbhUKPkbYCosCcvNsVVHgA2yLyFbbDJm2xdK7x3XSP5uW3AwF5F46kUTQwMKa9Mk",
  "key23": "5KRMdDf7tZVNpJ6QvYVCux7mVMFq1bZamQjqHMJdnD1Zvy8rCuFWT4wVe9Juq1R8SC7qpp9PwhdrkGPKRPcJwBAA",
  "key24": "3w2passcs8erq2qJCN7bH7YypQrhMBjcZPJZx1hFir1SwU6ZLBdmapThpAgNUxnxmqqWKR7ogeXqcVmPYyebiYMQ",
  "key25": "2UafqzCaVLaC4z8Nkm42XgcNMeegPtrtCjXUGeodNaKi61Bj1YkrQRqBv7NNjTiMPt1h7aprRXDcsFPEjrzdqzpi",
  "key26": "516H2aW6QL1aT3uFvtrqt1Qqs4vNH8D274nPdhCZ7o62FbcAhQSJ5Da66Znq2TcbUbWMMLwsjSu9tMSTiAVNxwTB",
  "key27": "2DPruNMgXgb77Y79KtitECMf3Y3UwApuRBFtuS85v9ZQu3QS8QQBv9XdYerZgYH7Fqts5Txs7up4y5YZET5SMxwF",
  "key28": "2GMq4aD8V16WhbYzPhCmEsZxM1k9wG516NRQA7trqUp6j3zAfQwht8L736oJ51A9jURNcjjFKiawaXj9Ns1foFYQ",
  "key29": "4raLv6nnXLbrHp58kP1vuDvJUKBojUd9Geg65c8niZfgVsigLAu3HvnN1DxhrqoLFjsaWDTyVpQJk457UqTx9rYT",
  "key30": "m28HcxXmhUuaoCEreT62f2nYSg8GE3ftCKCMbrUs46v59Y57Xc4YnyBA494dUfUroWTz2hrBA1R72EGH6UpjFv6",
  "key31": "oDipjdLF2dhJRf6cX7dSrgmVNAuWseaCUQVwWwYVGKVLmquhyj5kk7MftYq7q4AaLUVyQ3sWtz8qA8VQJYWX4uH",
  "key32": "4kxXzGaXKqfaU1Ba9WxidGFqjBnAuDCYwJQVkcmihxuRx9M59dudNuW4WnsBTzD2t4eVMHMRcWb6hv3XmghJDNez",
  "key33": "4cdzBCLR1pzUNdyL6R8CFvcy8biVEnvvjNJwGQHQJF29umj1rXv9biVa58P3Zc811GfGufRqKUyrSzdoJCKf8HGX",
  "key34": "47uQBJHS5muLH2X2V5JyWPUxkLdQaUgPfHM9x7Fj3niL3CF9oPsqGJ9CjD1Cb75N68QhxxyhwRN9CY23D2vXAq2d",
  "key35": "dzPaEkKUkan8Ka5dVshzfwzoNXHKkJDzteFTZa32e1saj2opP6CtuYEP3bWS7UkpJoAEJTXr9Y71b6qHoV3aVQP",
  "key36": "2xLbTvs1qW4GmS1P9s9Cb48pYRrUvkJNbvKMJFJ3ZytVDw8hEPr88hLMcbhNBERYunvDtPXzvjiSeDXoszW6qeh",
  "key37": "MwTSEq1fNkCZjYLv7avpmumWj56G9F1LEZi1QZ3SoK1KACopGskD9ABzJXRXPgug9GCcVDTwsC2ak5YDXPskYPx",
  "key38": "5hVEFKPShsUiDRgc3xteJN7jWu1jXFQgYoZHwnZg5FQFoGt582cpdQwKerRWLo9AUhdmGamzPBqRhfnqiSi7xGf9",
  "key39": "39CWR1Bn1t6m5BiWUwVaYjgVarfgmTNv3Yu2ULvhMzY9fqqGiFSC7tqxbXho1oRr45hXvmgaAcYZYhtXDNr5n51Y",
  "key40": "22Wkoz5NSw2mBTT2xv59Lo8yCxMFoMzyM7zmDYAhUPhJjbKTyrxTEWjGa2DadeaY2B6wwChScenRWURqNJwiAekv",
  "key41": "5jtwiCsaKYsPiavAKd1AUpUeYWNdwoLvez7veobkUFpzNhZLtNFqeKgJSCiLLqc4bkDHfpxCW4gqApRGPpn4PpPL",
  "key42": "3WdbzQq3Gzy1s82aWKHsJv4LLjqFBq1f14wdAEbW7PH5w7fAouBro5ASqJkC5gyEuvkiGRGGup8Nyeutn1UEEDAh",
  "key43": "GrnRnZLFRWtXDDad5Sj8NqdrET27e8BuG3EJm4FuSmXgecKQM3S42YKcYT7JZ6gdnwyi2nP5pbpRyU2zioYJRTb",
  "key44": "4XD6q6pEpbU2YYw7Dnp776evXbCWz9Vzz7R7GcnKMNZQNAY3Q59nZKN18dN573qqVZtbatgNtTdXoQkk3vrDDvnP",
  "key45": "2bRr69jDvLCGyWGvBKUYHAoCc6eX73R3EEZexzW185NnxrLFqtHTbsKEnLbxNvxJKLgmCPUz2X4Gfz5Xf9dF73pV",
  "key46": "21SGcA33s7GtyB1eAY7azTmRXLHqrr4z1whk2bT96NmtQiraWFMbMQ8PnMbRjDXXfkfqU2sw8zUpAQhFR9ih5R2J",
  "key47": "2sQaYzXVhimzi2TKTxZemQdGPYQxKHheFwkxgkKJQcNM55ztHgchuaU3Q1HwbDYRgYGBJ7PWeSvmEYRsquonhG7H",
  "key48": "44QsTCEyYh3Nf1DDgt5wYjwEvFzd8m7hFk8UfpTzzBvZGwPU6S5oDk56opb4VWUD7WoCQ5345bFuxAvwfCfXYgTZ",
  "key49": "4YxScPkNSFrAUVHms7JzNT3BtLgY9EgkgY4Ue8MyUksBj6diqii4HYL6krbsaJuGEbFWguRJCqB7jsJS7QyDTacJ"
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
