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
    "2skziTAKTUNRE7dGxpzACTnnZSpTZ1imfTsyKtTLZ5YuBBZ4dzyZCDoPbfERuDQRpj7SSWCZ15fWuZtsQubpXPuW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WcWxgUXiADJa9rNdRuxyzSP5raGn5Fdk2Zrp1YLWtEwCZKMrsCQcKJbQ2DaA8WFpdUF1JDCZL4u8L2Mvj2jP2Yo",
  "key1": "2Wxun9gacmq4ymkYznSUAoxJcRKa1Ufnnhf5R7fqvR7Q7n4wpQXffemfH8Xeof4qg9fMUhPHmNfYoM8xTMwrR9WV",
  "key2": "uMb5CptphQQU8wsAdYfs6z6CiBUeZttKFBK9upLecu3cHvND5rebHMzn3z8AWw6Wz6r93sbRMAV4JBZevZPfsp4",
  "key3": "5BHioy5oQt8BaVexK9zAUQKjq16d97MCsw1Huwr3DmH7wtxRkJS3dc4oLHfocsetEdbFBN43q3A68NANFYviDrGh",
  "key4": "4qEM6XzXsotmPc49qCP55wDnnEDFiAzYyH1BYW9173yRd7k4nypNet7qMFA8f5WHmXHFM3KR9RnD6CtFib5pRz5C",
  "key5": "QGT3fegdYxT77B1NVDSri3xHTMt1Z2Hmu5yi3ZNiYKyRNp3HhZoTKZdP5aRSB7TjTQwHhpiko4phwvSmsk7kCe5",
  "key6": "5qEWJMWT3DnpBPc2rR75v2C9dV89DETn9F9G1ZtEbRLjDJj52uLaTBfz5GH6eKikq1ZhmhkdSKNzbftZQo7f9GS4",
  "key7": "4poEocbdhfRjCFCxPMrn4RygYumfYFQ7uPpE56rnByooemMWKMeNNG5Dr5DP4uwmGS3NrBbjGz3rSXHkMyx5pE1Y",
  "key8": "2R3cs84QhFoDmEEFrBB12m7eV4FmUgxtDEasqFwUR6EAvN7WzdmuCEypqKmvRZ6tpSGJ6PwfJEjWWGqvbzAjZfKc",
  "key9": "5TaUbaJuAv4bHFFNfB8KXgDCBtrfW2Cf7DRoB5nUpDPKrobnSzc2pURASgwPVpJrwxkx64fBR2XnvzLfE3DRUFLW",
  "key10": "5sbQ3XHe6M7HWZqSKnd3xn1VFbKtfXwescutxPPYVwDfkyumdrKctt9ULCTJ6JZWNVgeSh9F9WWkcSbzRGn7eLfL",
  "key11": "5AoMrrubohBmHdSoJJvKfHM7ZF9qoE5H6QkD9QVawU65ZkUmiS6R2tmLxz4cNXU8BwiZzsA731Z8rWDu6TW2462W",
  "key12": "3ASocBHC8ZWiJhekwC3GWxAjxCBGZkTuyhBiDisKCsxayJdMjgFeLg579pvTxQuNY9vMxD5rUXzJyfSVysiAd57Q",
  "key13": "2Xako4V3puyxmMaSwep5VzbHyAMzuzJF4Jw5bpYpuHNRNdBwP53VAiSzdEKEicBfKN3c9ZUBU9w17yp42HvRudTU",
  "key14": "3khdc2JUKHuNvYuabwEcfmQVjYQWdQGY17n7hq2hsbZijjAorpfbHhphkCoLbtFVtkGbMRPxpbPWvi1p8nHEE8nm",
  "key15": "5PS8CUvxKJuDEPJ5Yau8k2jVND2uwNG1LP4MJ3Zp5VBvNqERAJzzgJF69JNtCy6arA9nwAVeRNPiwL8d9y2ia7Wp",
  "key16": "3eR3saXAAowCtfRvpJ9cjzCZ8oZAsLCwDeLmGgy4hfVVDUYPDw8KjNq8GWDzJQip6dB9VaTEMCsMEvCLzqdg88x3",
  "key17": "2igkNAEuWPpfFp8T81h5UMvW6JCDqoAzNddPsrNwZSHH9KriJyxCQhRxowFHBZYGLXQxcZVgRNzHKUE4y7CHj2MZ",
  "key18": "4AtaFj4r83iPY3oPDHtphSY6nsb5NLgiHRhPnsdo44ZyanR4Ej73Vh4gsbdagwCYyzMoyTGqNhVVgREXrvwSsckc",
  "key19": "5KatcyBFLCc3CYk2BHLFo68hj5PvVLL5LtSEmMspiV8xBZVkggLG4MktVpRZZoMuSj4i1iv9xbJBqPzV965NmdrR",
  "key20": "xtEiRPWgcDSX71DtmVhhxzQVLYfKsC6XNxrufaHv67jmuwHMtMKckasYUguGSN2fBzusver5gw7aesYXQsh4b2K",
  "key21": "2vQppafaMGMoU5JD72eHptZvfdN4JuoVQ1GVrNz9BcvupRDhy9YHp6cAdy1enAEpw6AH579WCQoKXT8Aok5QwGL2",
  "key22": "3sxcHJzqEetigDcvGzjn23DByPigM3QYHSeKnRLwJK7fbhJPDTeNCKfb7uaj5GhD4Bz5sCUAS4649M27Z41B4iU8",
  "key23": "WC2Fb82BbckEo3ozFpivjv5nmLWwTKTf9i1pWq2ceFKRjC1ob9BtAdZjhngzupVTU3hucrhawDJDXgKLQULtBUK",
  "key24": "46d9VmPyAXm4kNjbRmMRKXdnjUwr3HBRT4UMmR6SNqQkhLPFsF3NCpeXYip1FeR4zXugDYRiNQ76K5sWZv5anxqL",
  "key25": "nFCh3hMxh6uvvJ2hYGjxNKJ2WfmGFUsSdNPeW2yWakD4eXUgXavpssoPn37vT7XZkEP765dWGNToxxvKHRGayQY",
  "key26": "3Lmx9Et5a3dZTxDK9UwGTPGtgyLF4gY3MYExrrAARF7uLAkJYdvAC2yUP9u3TTJx5XrZb9j9jYnfdLLa4AkE5Db7",
  "key27": "3PHqZLLMkzqpzRaR8BNikB5frKnXe3FzKuB96V9ZJUJcBz3rxS666BkX8UUx4TG6osxAn4brZuYr6wxos4AWttva",
  "key28": "4LoR3C5pYrTvBiFm6kNQKRSsQwd45Dae74cTXqCj6RuKoZAP9A6HgMQtrVgqCCvhhrm2LLZvdjEQmxmRupCcRVgh",
  "key29": "5nPvmPbQKNH7fohpZwitv76xnVdEEzgr3SFVXv32H3TjYwCJkJoiZ4S6NraiHzE3yGihx8aSJom7tTjbU49dJjqL",
  "key30": "5L7bSGqCPDK9LXkyFhTN51B2fnWAJtEG2wNLfKftyxsA81xDSK7PeuRWcbardAEKMJUFjMtuR4Nvuet4m7bc4khk"
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
