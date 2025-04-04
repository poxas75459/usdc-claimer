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
    "2NGxmLTa87V3fK9vygCc18J1gyjzJMY5J9BQ6ktTN6tNpBUPEq8bt8M4KY697R7ky3FiMG4X9Jrpu4vNvjb6yNkZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gVtyRVNzfrfcjAqMRamxfLUekZnZ8KkRX5u4b62hGw4zcpz4zqFSTVfRL79Y5ED1ZQKirQbZoMcLTTsCyNXLbej",
  "key1": "61ujqCr94PbwaMZuEa1SbeqLwjZNUy9E8bPUX1DqNsEgS1RAyFpP6PPWGmaNToRPbXWbz7hZUiAHY9iYatFLuQXS",
  "key2": "31UHGNJ9TjyxVAiDH57mN2WxoJ6UJ9krASpBLx8sQpkaaYqHvYVer1WzhpQzwVWPcXdDxUiJhVUYvmquFoNG22a9",
  "key3": "iR1BrXcQ7YUhSM8G7EifHwnY2dPaXcfdpTT7WA4EWPUNWSDwzbCtQc5fY93VgLZerih7peNXcCE2KLK8Srfym4j",
  "key4": "4hvCMPJmuvpR7dSDnTXdVQkYxJqXZBmdjHDWuLng1oyhhUTMqobR5CT661v9R3VoRN5Y9umq1pX8RSeKUWLG8miN",
  "key5": "4xy6eBq1h7Tb8nmQnwKEA5QBK2AAx6psPHig7kCPKUXSY2WeQU4rihjsVyJRti8kwtS226EC2Mey6wC6V6SxNSAM",
  "key6": "GmKwVsontsS7Bmi4LgTVMCJUof4GAcFPLKSKuJuo5R6hRSzi2ezqbZaVdLBzYzCbDcrLyqqMmgDcdgXT4o4uWjX",
  "key7": "28Ktg8TpXN3qePBWaYkWAk1A8sqkno25X4o7ypR7ydesNGNcV47MaUAA25hWK3PdtEfd1TFu6YtTNFajd9ZTsWxK",
  "key8": "44NoqFCh8HtnzPbeJQgZD7QLJGunKAwmA16tuGQVrDGUzfTeohwFWBQwr2L8ibKXT6cyJBhWVqPaQCx6HqR1Ppwq",
  "key9": "A8AwM25medmq7JEVZQrhgtWBUvPjaJaVmB1UCRR26Hc6DxFzNARQnbLfn9duUeUpR5x8ejNQa5TCBaGc8aRvXcL",
  "key10": "3jnb88xcxfasH2q9f7Tg84ex9k6YBS7EkAc3NUe1QdMBgoy9etyVyawKsUsURvukCRjjXLppoPD48ChoN84FrjjT",
  "key11": "4UdpcCgJkANdcpsdaDVhYBQ4QyY9iCCiKoHac2en67knW2iMFrvjnh9dczjf7d8mZdTWEqBkL961bGPnuvirJSzi",
  "key12": "26iEx9suoyY9fmsQhzARHsmmnxvDguuj5jzD1cbVDnxrULnf5BBBWoHQh3rr3GE3Lq5vQ899b96mudUSecd4LTyB",
  "key13": "62PA9uvE9WKGQhqqc7bdhuqpxpzMgCqkrwZ7sscKGhwahXjaCMP8ANP3QphzsgkTtsoPF2R9xpEykdSN2MkD74P5",
  "key14": "3LXsmKyV1STy9JgNL6kmiuakUAhnbYc1UNZfrDhsQSyNDwBCC8shM4ro95ZkBJ6M1cryeS98HgqX3Sqw7hkNfay9",
  "key15": "5wtH4YTX1MnmCtEut6xMVyGA5ECZm2fmu73ZTMWCMiwvy23AFGfbuaCGoB9x7tyKRErYZE1gHQyF88i6NaoYF4qk",
  "key16": "3FYUn1q6MWbzMzsh9Ycp1th17vZh85JbGq2S1MnaVER1DzpMB2aQcwNrjuZxBk7kZT5t2NiAQeHisVv9geVRoZGa",
  "key17": "3QYTfPbYhJFzeirfLi9ApDPEU3H2aTotHdtBJEyCqWDzenRmsq7M5zNuWnTKzBV85XbDAkzNXXrmrFmEGBXMFk7F",
  "key18": "61fSuRBwJbseJFL8vRVRfzxBSxwYoR6AKYyjn6YvsxggFEiDFTeFZ1qtdRmN3DksANJ2ypxAbg4Z7bd82at11RPe",
  "key19": "5SotzHcmGYpQBJrXLhkvz6R6UU6KPua3ASLnwY9BxUEiWUxhFJ6NMYhw5P7eFVzYHybj8EvHXRoeP8yZPdExQsqo",
  "key20": "43uq5RPkivS7EyunkG57wvu3kpNGc5iozfoVCTzdtAg3UPNoExpjS1x4kgzCW3tnPGaqXkAFt7KL5ccm7CkKvfJ",
  "key21": "4RtYwebXpCHJXW7FbRu6gGDU6mXL3wd6udg6dmuKUpzoRYnh33Cs5Sbk7fRrQcydTtWJbYCh56arnfKMiyWDLojJ",
  "key22": "4V2fX64xkc5XPWQDgyPo6ohQao7dW81nHrccnbkg48MvLXMhMKSBC35JGiqjrzbNtofxe14MU1EdtWDeV8EPA7Hv",
  "key23": "2mjEyKcKxCsJuEjgB1FTnoAssYQKVTNNQ4i3k91vWoxskmd75N7p7hD5vahMNqC8WRZGpr9jLvgAGkpt2dugQZtD",
  "key24": "65AkAKjyYSad1oKxD3sKen8Q6FFRf72wrq3zqLbaFvW3iPSN9h8RXc11T8xW8REJNFHmHUAVHCyE4WDMUDqdKuWG",
  "key25": "2BfsgUWKMCZKrExzFwb2s1j5DgJLwfnAsYMFb7CQ5C6p2vfDvuhGJrJsVTG1ezsB7kwJuSLW3n4sSd6HeQ2n5FZZ",
  "key26": "3UJ8K86MgscCj73tyW5CgqxQxHaBpSnTkAvBuTjQx4gyhzau5JvWBz9KnJt6vYnGgcYwXipAVBJg4hQnBt5yoHaq",
  "key27": "28u6SZaTusUb4yN38boo9mFnv5R9E2yz7341zPzTGDMZZEmob9shaEkegiqKCrcxn69vDcZkcT72zkQsJ6AKbaiQ",
  "key28": "3ew1EVEu9AuT64HLnPGw1wfy5KGJsh9ymMEJiARRuRxMtJTS4YJJcMt65WnpZD5PqfCDPTfyYmF4WvNX5F7CcgEY",
  "key29": "57PeVqaYM6rK5HvDiqkkuymbSob3JPrprM4mu4NgGsgPzfF9dY1ckJHFo3HGjW5XsRrJx5W4LKvzuZo6522zCjsd",
  "key30": "GVnMuLGYzu5HSQnVyspDVaXu29TVaDkKB3kab4ERYjCFTLye4Z1tYbQyq3ydVGhoid9HFF9644kbViMnEXYcRjt",
  "key31": "4aVwVgi5VWg3EoaC5v1z2qPHNGetnqRwUvhcP31MMWEfFMyKmB1yjdkzmp97CJLBB7ryXydSC6YfVYxfCZfTPysL",
  "key32": "5NWL55cMhSFjE77ytEFEqwhjUNkpd6YMTjwz26X831Kqnzpdq9GE8usHPC6ZCFTJh1cjYNti5CBLK6DBYsdKteTg",
  "key33": "2p39bjXph1niQnernY3nrUiTr3ieF4TCZemTCyKhzBB4v6xuRZEwN6ZWmhEP2Sv3L5wNpMAccBAhKeVDhWa2rYbG",
  "key34": "rJTUPqsdQeTsnTgVCNnAj6cy95aHU5GLNSHRk6ZCiD2iDVszgoeU3Gy1YpAr3MvTY5ogbwSD9srBZ6CExFNmJuv",
  "key35": "AbXq6rLoUM6ENfsiZubkhChKgu15FeLiuNQWVF6qh4PSsGnTUa1uR2uj9YAnHLNRSYncDBkYhksktXyfRUsFH1a"
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
