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
    "2psn5ohUpdT7rjQYyNAV7p5RbDmYbJubexhuTcod5CzgABoRJnfSVMZCW2FN4NLd6e4pgAWxkft6qsjpqw6s7UmD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QNu9ggoc8VEgh2Zxm2pd1C9jgd6oVfKc7Pb2tXfC2JqYsZaNdVvwhTdDMfi1sgYTw4M1RXDkVvuRGZASE8dmhPA",
  "key1": "SmRyg1LUKFPGrH9pzG5tszJWGLT6uetYpZi46WvyFGBpJegT28BxQ9NEy5kvJnbPK9we2ATfiWbN6qoWVvXPncq",
  "key2": "5pyF4RBh3q8FAxPfEpVanBymvKNs9Ue221v43xKgB2QZpk3furcoYm8m9XvvgpdEqkScdQyax1zP56tGG3RGMAJc",
  "key3": "3CCN5UnWDw6WxWVStnWK3ScwVFEPEAjJi4byYPpn6Du5RCnBSF8XH7bFhAdYHkFcXJhPyXaEggVKtDVuJPLK76pU",
  "key4": "3hisvnWkbtnWcrhzKrxif32DWV141RywcbjVtAbZErRfTtTjgdje7fn9DTV1uLXns6FkVRZ5dyEECm9aRa4JvQZT",
  "key5": "36j1833xW8euvDWCT7TiYKLocSo3G64YAA4hw9LHdDtWqvvitgJTm9TTkQKPbTVpKxf9wb1K388FA8oZvpDCkps6",
  "key6": "2RSuXfX2VYKHk22yA7uZcuRQGFKgR9G5LxgwDBjz8EcLcca3L493hLypFqaFqbG5N2NQRbCb9EuxdwRaGHbmYD39",
  "key7": "dTPLy12vQgn4HvtvHBnbTL65idivUsc2S1UYCCZKay6asSWELZLuNQjWJwfoyYnDHPQTp1CfpCR8C1YyH9696wm",
  "key8": "27AvfTf8H5SS51bQKa2d1VasCUqETrrnpVUyQgynCjNeWHcf9pNwBjKn18wTyTtM62NQg4p3JiDKpfScwy551TZF",
  "key9": "5AwXxoCaW3Rrx8igYyw3N8dqeHH6qkJtwgV9x3j1d8ESCKJ5rwJV3LjU7p2NdvKcReJKD1An2T8YduvL98NAAaoW",
  "key10": "4BVeGQBoFR7afrcZ5QKf95byrs2kdrZXS6TQexaTsuN87qzsGMtemEFPTus8i67cj863cNVMeojyhmCe8snrGJ9c",
  "key11": "2xLktpCGJTAJcE1EL3aE6eBKLPR8fYkV7DFe4n2ZbgorbSu3HGgqWpnfJvg5twZpNAi2hz4goEHZo8WNP3f2GLgP",
  "key12": "5KsWsmSqkuXdraF9z945azWKp4RbuEoKmEG2AiFXWRr58HXzS4Z97ugtQ7A28uKNhxcXphLq3XHjSy5Q74ThfkAU",
  "key13": "4GrJBgjwTQeY6xgyk2LsdyUEA5GBNKUfrehPc7yZDYajAyCQkD8WAjauRL71G9qEWj5UGzTYeLERP7CDnbe3Rc5M",
  "key14": "mPPXVgczPkjtzfxF8JkQ5Ka1D7Q9pXjB4Ysns7xV4qo5oEND3e82EFFJnkhxSVvGDu4EoujgcfyE5g8RWTWTAiR",
  "key15": "31foB34XQVt7suAGSB9AimG81v44hsN968YgimhWPQw3eBnHyhEdDGJCFgpkCbmybbCideXu7GphQAKWjaFQnQRm",
  "key16": "3P54Q8QCN3UopuvpjbBGU4pKzQ1tbwJDcky3UaLrApmikss1AYajg7j8XD4GAKbyRBv4AJkCioEYZaFcwyan6wR4",
  "key17": "3iCUVifobdpfwwpZxkiGA5rWfkAZzRDt4CXCbd9SxGwS4vz9FJpHwRJJdeptN4nyt6svHGrBRqS6r4PmxcV8zZFm",
  "key18": "oqCFJGDe7RdJx87QGckv7ZneRqBMNK575RZgsYhqHQQ1JSKxitCgqmDCJERzD3RsvBSY8SE3TkwVJ4gBhBDn8oV",
  "key19": "2GTAoyFvDQ9haSdTdhpYo9uEdZR3hM3wZc1CQao6E3DFW7fk9WRd5V24AwSriSvH8RTMbBpdZHHmWyiEn3yMT9jo",
  "key20": "4oBAJf1Bp1RwFp7m7mz9DwZTM71aofkGzq3PdNsZ5mtc1qJcYoX1Y5hhgjQqfxbM67hP8bWvKCPpi5S45Vdv4KgS",
  "key21": "4HqenbZDbv8UF1SsZe6QLcsJY9FhemNTt8ksGBnoSqULE6WZ8qjdoqReFG6HSwVdeUan65biwb4aPA82wFRSEHe3",
  "key22": "2gF8BhkKYv4ZLBjivpkWEnNe5euZR25vTnMjLGsJkEWKroKcJve91HVdxdwNUTN7cKRNjyxRp1SkYptSk2vxhQ87",
  "key23": "aHtzK4FaZzYZaq6cvafGWox4cgEZT4TPaYYjpGut9yDqEZz6z7dDgc6zaXtA6NzU8RZwxy8Xh5vEJcuNKKdGggy",
  "key24": "5UUCx2mNaURvKr57ncQMuFPJbpNx7qicoXGE13wbcG5KekSxopxLML2XpyYVU3bwdEt3v3wHnNMP4Dg3xwD5U2PY",
  "key25": "qV3fLhhTzLyhdNS16sHYHRaCtfTntQuaZRenwaQRXgPwiCYQNZvc4SVZd5cv9SVDJDPtnTDpLEZ49ZpapA6W4JS",
  "key26": "3biZbFY2WwnusgDNC9JiyynRu8jGNDpSRcWfs7NQaaJBmuj8CE8vH9m9UvPkiGQepLWb2tzefW3F3VKycZUAQN3o",
  "key27": "3MQWot7z2awN3sBw8fr5dYhhRVdzz8zXv3CELUFQ1L9qHLRp4zMfFa5PnY4yzrTUYFXGrva77899TgfvAB5JRGgE",
  "key28": "59BYrgb8f4Pwxjr5M6SvorEXbQLw41U5Hb21CsL1YnGmyonnwb7gbaBz9ZL3nQaSeMrgqZFQzgk6fbi7bfpbb6zF",
  "key29": "4eyDa9b4WrRp1ZbpeCEPp5jtAyUdKtvqPugbvpVcHBB6jmQoHKQ2XdhkvfdB4Z8DaN6ChmUT4cvFE3hGNZ63ebDP",
  "key30": "391dUorp53bdnECQJnyJk8Afj535fSrcKkTUpmscBc2P6qN5pdjb6rwYMPQ4T3BUfWXX9AkBfvyjGVYbuzy3ipVQ",
  "key31": "3cKyKVwgAJ3tRAKwy4reXFpMxzGZPVJDCbE1MherGTvqaUK6X3ydsqPg2Nj58RANm6yJ7UKzXRZSYcyuzGSHoAQ9",
  "key32": "KJAsPyK8rCcVbqu5mme54fPSHSxP9t2ZThb814uoYSss8YGYRBkir5hdyLfw9h6QETur6VpRH9fvtZmxc5JsVpB",
  "key33": "5MuTaRe5NFTdP5vgphBr4QtquRfhLQzcPxExPHPpDHwSmYizQ4EUwpN2Dq8h5XpnAf5XishKjvDyJgt6sxZi8Rn1",
  "key34": "3weHKWiAnqGjQeYfsWYcvxF9o8YBMqU2RW1rNSb64fGxyKhT1fpgSVZDryzdK9GjnWW5cZYzbk3tQ9kFMC5WPj8q",
  "key35": "3T2TWsadhTe2NtKdT9aJf8gGfHLpByZZvWNr4ziSnFxPPrq4R4wgQddJ3ipZNBNK7mGbrPSq4p2NfJjp8f9Qs3ua",
  "key36": "4HtYn8XaQjPCCjyjrhVaeneMDxxPvgD8wjaXrQnma4k8L1ZQ2HuHNm8JXUNoKrnR8MsRnY9zf3a1D9Aao26W827u",
  "key37": "4Y95aYuT4i1WCJrh9dCYrTk5EnsVEFUeDSF4kdtAwJUFfDK1BmnHqKNcaFx5sJhPr44EDFaCAA9DFxKgSg9quVYt",
  "key38": "F9fcxgsSy2kGBxiHyvVhVSWF2LZWTuUFhkr8u9MTK7ifBPp3T1qXvPNzGuDy2A7wLNgSEbD8MQGQoKJB64kQnBQ",
  "key39": "2v6mFXf9vp6csSDAjzws2YT6xvfiPRHw1jfUWom7ThpZXJsPCSCtRrmae5ubv1GZ2DLVJsKayDCnowdgfzhNyu9t",
  "key40": "6XmkM7i2iznKD9HwkDqabqwaKQ7C9r2iWG1B8DQvag9MQS3F2qPZ8U8uZrL4hzJpBzvXfyYEXqN5u6NL2SasFUh",
  "key41": "2qaPYbWnCCFPkgukXxPyvuJYD9YQFEtvhna1m3bCoJajxbWiZ5anpxHrP6sBAY3CmuXYH7jRtzUGTqG8fHMuH5s6",
  "key42": "3djNrdRaUEoTt9Vd1ptmVptu6BZSM4qXCDJNXeFtFCbx7UgJvLS2UHNndMgKwfxUJPgj5jawttsrDDPBjJsmfJ29",
  "key43": "5TQ4QNkMRjGFWSvZrN7irPBP2jUTirZ15ppkqphu2K3i2L21sUscgajfpjSBwzxzFkYRiaczDxBQLVWiLnGh1Lu3",
  "key44": "56V9u3rJVSEnmoxRCvXkN34V7oMtpuhBpu3mGSoYqXxEQz3wAi834oj8WpXs5TpTm1u7LEHuHcRLB2YrB1dzgm2L",
  "key45": "5FaA1x5j9DvmxLxp7k24fK4Udvrx17Z49wR4VizrLrAjn37SRxEeMAFoAcEr7PKZiC5YhKZzhkAyvr9MThkazqLh",
  "key46": "2gE9CuDM4FM6tFjXFXBSPefmqC2CmWfX7uRPH8dLKk712N7MiyijiqTzrUcU56EiPNJGnnYKaVd1oYuEEfjnW9Lu"
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
