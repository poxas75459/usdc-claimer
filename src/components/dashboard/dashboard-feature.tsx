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
    "5yN9ZKpqQodjDfc2m6xJ3TNbGLd8rkRRAPg15kajZYBbBky7sBc86NseGJ8RvsWGS3iobFugcn5yB86tLezn4Fhq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9icAxZQMJSYK3x4bpdofu1ssVFsBgMPpn7dbpPNrsZsj1238ztHT6fzPPS65h13DqtTJhhP3A526QxN2cNQ8js2",
  "key1": "4C16UnAADVq9s35s9bXy68bjiHLyf5zngo3CAsB3LKhvNehnhtxsHFL4Ph2CJynSiwYtnz6NXCiZEmAxvvTPYda6",
  "key2": "2srnyWN3iykUxG4me8c5aMgyRvjFma7pLeRsTMDd27gnBJmuRKHCmKXgscbGw6GsephDWKn1me6kKgu56vrc4N7o",
  "key3": "2xb83Q5fH9gVDPxFXr5PFHmoEeFvzr7eKcHGRKSYxrU6CQrxJuFprMB6RCbPC7KHrHi1ffckquv3L6iLguiaFkHy",
  "key4": "2UkLnYysNjhX37FKvGTHx3CPK3dtxm8vUr1GU3YeqtUwmAQdrqncaH1wgamxe1u9tYGZHHyfULReZxi5vALPbWk",
  "key5": "5NCQ4AYoLLGe3ZVyxcT1c5BDc191FUYh82gPN7MCMQ8nUaaAFsYS9HS51QyAtJYiBtX53cm2Boc5bCaEnvk2ogcS",
  "key6": "5YrwQuQGN9tAfDvAzMz9ww1GThMJry8XG7chQx6RrksXEdY55sJhUg6cWdTovUFFQJtif5hmPcnLACETtcRL5GqP",
  "key7": "3TrvBQYUbcg2wom2FXm7ex3xziBWppbfRPZSpVacYdpxuquBMUJwdVfgrPY8WrMNq23VnyPhkXJxPKSfvrWzTfGi",
  "key8": "B3ghDthDyac2WqamBYQbaqtBx5CJd7Pudezuknnr5cUMSEAWPamWSRn6BrYqj1guendbQ8NAtaPT5nkoWimVnvp",
  "key9": "4JJbHPtjXQYYFsB8kFA9ig7xqxmUTPNuDEwokmxvEg6N8E66ipBpPXbN3zKbg5DM1DhPiwFnhMh8yPKjVndxMkpK",
  "key10": "kpDoipB1EqjmAt3QcwqWLhK3pURnvtucdXKKNnTyzv36CbSNnx8ckjDmeEe1qBf3iNdNiqdwYQq948BszN6w5Si",
  "key11": "56dR7znryr4BiSZd7b5g7MgUuWqbYGY6awrj4LnEsMcUPZGrA8q7Ymc3TcMCPtcqauKZ3FDxDJGJsziBYHMCyEQs",
  "key12": "4ydU2kqqNPvmby7S8oxgwWGkyjRYPH12c9hYrhApJ3J1Dxk8GaQc1RiwASYvrJp3KFsVGZWbfdZRmDWMYParHkeQ",
  "key13": "4an3wJtHWwJVdHpS7wsvoxuSY7USxeeZq4oaTPG28Xcz7rmrt2Q9ZC3nvMo2mQms24wu1ornAw8BYRdL2GBg2R1Z",
  "key14": "35JiBDDeAKnebdWVnMdnyYHPg9gEdgFZzZmtTXJDuDxzu9pYfqfczuKpeq2p5EuJAToeerCMQUnBD7pwmgYfSSmz",
  "key15": "5Fj1gGTAovF6V9mGzs2Dh1U2KKjbruULwFx1UfBQCHX35Z1UY1Mw195RrK6kiQTDF2ZduFiyhVgvvpbhJWRKZ21f",
  "key16": "4pWpZLLgoaj7H4rhKgyD8zvs2MaPdAMPXh1TtR1DBcoNtJMiN6LHdD56SQWTqKqyXji658drXjVbQGAdo1iAsuid",
  "key17": "3WxXMv6VMzF1zAMxYDxx5SuAB3rYskaADYGD4uKkw4zFBBWRgDmL12K3ysTHR4qL25k3GqjJ8WK89Cn98bCBN2py",
  "key18": "WmsHTDzWiwcocGC7FToRtZdf1rqbZDY1g3CxydPxT7rZDH68UMsu1xR9KqZ7MwuzJZ5vhxMt8E6tdvM9GiVydrP",
  "key19": "4oqgkbhN8QYRccEBAxGhQcfuETaGEnZxcgj48nvPPKm9VZMJaXMemPVVDaiVSABbECFNYg4A2HzwEEZ2v9i8pgsu",
  "key20": "2ETXjgu9H8iTBiqhJMUNzkSgq8KBcM3BSqWRr2PRZ2c8RTNSTMDJreEh9HScB6d5sv3GeMz2YBsFEXSAbFEWgcAt",
  "key21": "3NrRjKDJExN7eh1hN3ggYFLNszrZ9rKzmtLHstxQv4F7EBQYtaMRwV7LYfVtgoyYp35HeSmWpDboVZHZcgYJJNFF",
  "key22": "4FBXvcpTMpHEN3FB888UcBtGnEkvv3VeGkE5pHd7j6Sou1M5YqcvHTsbFkx3Gudt3w1QFw2b2HYMRHQkrwHWqSAq",
  "key23": "TgbjBL2WarEMXKSLHPnCSVePNoZyXukb4QLfYTnSYys5C3sozaUyJhX61TfGPmw373iYMagA2iDUd5jpmVZJEKG",
  "key24": "26QjgBRiHTPZFBRPKAf45bBf4LDevxo4a2N4BYiizx3Wn4CCCNCRdCgqY1rLY1HwgAnLEw7BwnVn7GSWTLnKgJQe",
  "key25": "5W6h7CwUQzDYRJfUdJubLVd86LFWk9WG3dtXgu7YqZKoVgeTsaSw2RWv73wffezuZtY1zaNFQFfgcF9vcVvj5H1X",
  "key26": "2hD2xWw21HzfvMnqhcFVLwxDWotxTMFx7ZfZgU6fCdhbByuDgP213pfaGDxsZ1kW6LnHY4f7yvtH314xKWCsyvgi",
  "key27": "4odnoZib5k6NCb92Q5tiQb4eAAhVxV2YWAMwXjaZ5K34KXKVqE7gmybKrjRH4KHCqTMXeFQ1RxVLhpqooRt9WwhG",
  "key28": "61vue9gaZf6vuwcTYmVbfWrKzvyFzeFK8kmjw49yVYQfqkQ948nrs9ejcgcbdczhuENxsj2AXwxoPNsXANKChtoX",
  "key29": "rMS9hbDoagQ5sMjKNr6s7pWf9cWTynx1JTnBRBFB4kmzdSDzeZBfhrmMjJA6XU87qCMYhN5YPYH8DkHbBfYRznW",
  "key30": "2QCtP2ogry7Murh4Fn53QoMaybYsrq8Z7euAS6a3ZUWyUryiqzVef54voeQMWeW22v4SRohL6BTBPgWjuyYwA5sY",
  "key31": "5CR7A4gLdRScmmAcyRNdtCCbgZ8BGoFtiubqckWvvPekBTHMrHZ2vBoAogYtxCejxvhuyHszMYCZ7EH5Bw15bGEv",
  "key32": "3GuCQQJdNmrEJabn4hX3V8DPxEPjofMiE8eCTHMAtrJrBWXMSiVtXCAtMdJQ5eoyg7B3QP8LK5V5f3Cpv4zmTfPF",
  "key33": "4vKt3jAbftNuNjNyN64ZhzR8UrRpKhDDV9PYm5G2yXtVyXjctmpR93mz6AKxtkv8ZzyLUrPxTzPnrRp18XF6iQF7",
  "key34": "i7vQT4nMkCzjRPqT3R8UAtTaPimXhvhfBFN3Ei8xYHov8gdui5ZpcXwQPhLpfuuWDWR6wXFYGsGA2peBsggNSCD",
  "key35": "j4ef5Yj15hcqzgFfrqCDHVP5jeU8FnQ97gxyqphYchuTZVYFS6DBBrKEBQqgvpgDQbj4XqkFwBdcd186wEUchRP",
  "key36": "5xteT2ZAtgMXop3Zc9rp24Ry9s3SDxDvfGYSWg4xJ4Tm4HTYKhAXsh17a5tudoubiovki5HgkyXL6UVHd6uPtKxX",
  "key37": "2KSXoWySeuv7RurjQh836RwCf2ZMJrjSLhJbEPRgouKshjFgr2G9MVcLevFZcJVxGkSt1TRuQM6b9dgbeQbuvuij",
  "key38": "2PxeSV5dLvXdHwj7wGBMTbKaykihJ7mVDWCixfHHS78ggZvcNLSMfC1t2fAHE9Tq8iKzhpjSUvQZ2MwLBdhJmRiF",
  "key39": "2uwzLqdwTffviJHLVgpKRQxPUnKUXwG31LRrip9qh6nLWwBEQN63YgSZJkgSGvDornQanajqfL3JV1eNw9DafcyH",
  "key40": "3gkCweg2NoKdCG3pVUUdk2eR18cKGbuvPh5BoJZnmXAaCD8VJTZkjzaZL9CdJjRafEHfY3h1SAttASykSRpaDiQo",
  "key41": "52pYBEQ1hKvpjwtHq1NidRDaYTcBv5eFTz4ywLmwJPqaqxD5nwJLdZBhPBcBEisNZdif1zV4nwty9utYKi28S7dk",
  "key42": "29GEJZDjQkAsZ11Py56zeTMXtM8pZ5tm3CX3CShuvo8JhyAF7ZWSJ34ptWJX9hruxiDCu8Lu5vpiFyRkzXvTBEkH",
  "key43": "5iYedfSRUKYqUDsNynJMHKgXJhTSKjJaf9zE2XKecMouBNssiwFpWSa8wURyu9T3iDtWvrHossLugDD9wYgcbGt1"
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
