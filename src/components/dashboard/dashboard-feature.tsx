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
    "pQWhAcvYW1JXgu5hEX65DuDEqJfL8qW4xUYpxjUkVhqKVuhzqUh94TXZzc4Xs4XaM1o8L1ZBxxxGamyuzCiPCRi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DswmTuG5k4HS7ZHvF4RGehgCMWmAjJ9DRQbn5ewjNcG3kS6jeAK7Ydii3tr3VjipexXEXsvAEvyM3zQxLCs1hRa",
  "key1": "5g81nZy5tetE9qNLWZfbSh2i8YLkNT7oA9KKHxNpLyCQAVfqw4bWpVcDACjJvmNLWPh67Wt6snmLFgga2nxepjbd",
  "key2": "2y1qr1m39XU2DDi2STmb2RnhLsijJthZZt8q5xPrGBaVGV982oBoD27ThoJEg4hrptHntm7GfuWUvPkiQmP4oKfZ",
  "key3": "4wEXF3f5Z1G5zDrqkLRHJ5PqMHBHaX1J97t7GT7U4XZzYKXkAPpACcdpLyP6yN5bTbrWbztQmGtgFY2ijfxDQdrv",
  "key4": "57er5TZ8NqLpBtwWvjDVDygXKT3CKGdF9YGpn9SN4scWVPua7hTvMEhV6NdALwdBZt5U1CLM5JwpH3A86ABC8Zki",
  "key5": "2VydY7sXKt73PLB9RfQTrzXXSX34SwQbbzbZL2KKmVvrD1Z3PAzBs7Dw4F4g2sbqYPM2Bqcf1DjMvxoRXmFtzSNh",
  "key6": "341deT5BLiD7MmsHV1PVmFBuPRqRKAaFS3uimQjiWzr3YSz8wVFcU9VhNULx2P4MbLkvs7yY5mKYborX524JpjDG",
  "key7": "ZfAKEs2JcveXtaThzRQ7w2cFv8pkKMp9y9pEYqqvbCDg9DUARLBekVFmTjyM9LcUKzdpT9rdcvcKcAkCZuazwh1",
  "key8": "2mjakGMF912EzdN6z7iDRQ1NJ7YJve9oFVQ1GFGuqcasF1Mwig9jnYB6HubytVBpmCsstF5Wvxsji6zW2ZEmFsky",
  "key9": "2c95f9fGVUhXNhihdgZVQBhPqgPkg7CaQ4ahu1fBxsUAHbZh8QF8ADBmbWaddGVM5NgaxbHxFQ2SGwdH3VTuLikm",
  "key10": "2fKwE7Lag1tMqVSd3SGsqFpuQ2dEQQnoQZ7q67nh11WRBLZyMepc77heMJkbxCFkxPMkfUqJzZ4ckYtrzWW1u8LQ",
  "key11": "5EMjarsu8VDac9WXBeE39Poi7ZvTFqseLQHZc97TzxSwT5jtXgqJYLem3uuWmQ8R4qiDgT9UyMwrRtFzQKnLdDjy",
  "key12": "5c7edweKkJdzBDnab6UnqFtcbiAAszsKsjjUUrqW32ZihScGsSRBeLPQnX1FW2shacMfiRKQ17c2ciVgZGP67D7x",
  "key13": "5etoR4VQViAhyakg6nH8whQvVvP2NpMcBx3FeETnwoWsXYQHSa2LVCQSzEjXTWQwNsystsrCTf2BtqRTLu4KpQh",
  "key14": "3Ym97sVDKmx3sAWMxyGBs2343LLtVUQdVTyxqDnXvJAzWcGGJF8tnXHKR3S7FuedTsPd7eBjWEDUymaQidZG8451",
  "key15": "3meQ8UWvjJvyhrBQDhbCxfwFLrvE8kLonetRRJzHwNXRHReN7iYTmmLFkUhwwuBNfMgK4ttAXCCkyYxEXF3PRNcp",
  "key16": "5wj5BrRS5DNXWayM8TtfNyiZzgAFnacEsCRxXuEcHCRr5T4U6JeDYyeRp2vk1z1xLHDk9aD1Uvj3zdgXAZtbZawy",
  "key17": "4qBkeZZGqG3BrdnmHpgRq5rh1Y5pyQYCdC1e1C1fRS8K8WcqmBrBHaCaNeavRRPsomop5pMZHGLBEbHw38EWJS6N",
  "key18": "4jsvi1KqSW5KRXi9LXc4kQaoZZxNmrf31aNuo2So3Gij3H7Dpzv7Le9MgZ2YTPCw9PTTUP6MJYwUNrBuVU2ckeRP",
  "key19": "5RxZBRA8yz7JRYPp2Wt55t3Cyf13L1z2nFgVyvFNchnobViUJwjo5Zuo4vA32LDF7M3hmW4Vmy8oAdNR1TEDDTWF",
  "key20": "5beCBfj1G3LqsUUkT3Aups7LkRVyn3zANpqQu7PQHYYfGCHEtJdW5TZqKs1QjsJ87EPpoLbi7Ay9c8uCdRXEu2k",
  "key21": "3BvwCPps8cdPsPzrTP7rSJpqF7F971Zu5zAJTpd6dBi3TxLjvPrN91mQF47UEQs17B4DusskiVBEt3nHm8H3KcMK",
  "key22": "qvXogAqTkMAMFVrEmrpaMX4qJmpD7CDWWDWAVrZueyWrx7TEQwSiAzkMiEHDFtK1KF8q65uv3QLjvYKXG3dfw2b",
  "key23": "2BeAqNqmZsYjqzFzoAwn2gfqqqQ7ebS4MJs4sSJHpRfphEgmeba7caSAjvyFcmvULCuUoqdxyF5ijv8BNArHU9P8",
  "key24": "42U955dC63gGYdDgkYrwEkwbkXCVAAsVD7rYqmtsrQXnF92eAWY1vdCT7CGraw17hVR1gQhPXhh15waRiDDebQFW",
  "key25": "CTX5ioKFay1ta8TaC1NBk8ExevsYgphkMKqU6djeaBzWMgGvzbj7faPng5D1FMqjXKkSL6gNoyzY7vrsPn7HNSr",
  "key26": "3CX2xSUyeZiyMDwNYfT1KH8DoQ6FjnyZsddPTShzHcMEkiiMizSjurx17MisstZrCoC6F8aK8Ygp3uF7rUBhTJk1",
  "key27": "2cL16dxgQEvVNY1zMD68FJpf9cyJ7wA7qEUjj5pUmhecEC9CEgdmL7XXU9Nf32FjTHWnPEXqwXCV9mhj6CTTsuYt",
  "key28": "zN2n93Vny1gJASeo65krVdw8thJnG1LLJ9M7LVQzB9fuYbKNt3Ebz2UEzBDBuDfygtG6ZVZbJaiaiGyba5mNeGr",
  "key29": "3hr9jeHyvP2AKQBwBaWZmdS1Rhn4Q88EVU2ShE2FFLfUwkaqrdkF8rswFr4o6WjeVMcxgCfKnJgL8TSe8n2SFvFU",
  "key30": "EHPe58P6xCVKErRwVDEiqpLWeZorudCN3BGgxixPF6JmUQuouHiX4jgJCZmRGiPpgezHUWJSwz39XhhjczHAt5A",
  "key31": "4A4pMURaKzeFTmaakciAL4e3nb2CRtdhCMHyNkWJPCqZE5vr14kU3ocAz9thCTufeVSfLvkuXHDapdxRhTmiYGMX",
  "key32": "2gBdbcXEFPgdMY52o4DEL7nXk3D47YBCXsaJzVpoN4YqoskabmGviaRWN21sV7Pk96xNEhxCzVudtTVqpj1YLpmq",
  "key33": "5tJX3UknKTVhxtsstecJLZpJnK1yBMf8QJ4d65J3yJ8L9ADSDcBFR7FkLEDaEQNq4MbTn7dgNKZfheGxyoG4xPzf",
  "key34": "4gKwmkdmZFt7i8o5iSnrAS9YfHrDUgWVQHQDRewYBLi8osK7jaWnQxoNJaVQZ8HpTcrAtvHDUtwv4bknZHgKK1M3",
  "key35": "3VNcSXoSHVTFvG7FxhnhRZmLSBGnv3JyBPfbNat9tZSzTCnsKkUu43owKxodHgFCQxvECfH567uvfuBjB79X6AzF",
  "key36": "5sZGpdEJBe6ro27Hi3s7kp3c7LSc5wwY4xiiMDsbcxhyqoeRmVqdCgoChjYmTryj9HpMs4mKexZkXnvj814iVexr",
  "key37": "2tgZoEEDNj9CfiecwC4p41yee3vkBcP3VEtDMt5xmjJmizM8HYhj3x64u3ebn5zdkhhcpYY1yKLLcjPFrVosr87M",
  "key38": "5h4389suGK9m7kPtqBJkJXGEgPTzqiax4sU4U1Ms4XSMsT8rfaQLXFJYMnAcvoZD8j1csD8JrhncKc23Ewyzna3c",
  "key39": "4AhZGxdqDbRr1EzNs8xUGMgH3Hx9NkqwkyzeYEHvLteXRtZDHMJVKbYR7e8Gt2QV6t6WHMyvYuyNGgtgZVfrngsX",
  "key40": "4UYEm5fsQ8CWi9Bi8rzqHQJAdkJreHaeGeSVVCSiwzDCBxQmpViGXtJ35c6QDNj7m4W1CvpQYHHstZ2eLFUdEg4s",
  "key41": "2m3iskqy9ooSXzaqYDD3iCZiXxxnhCh21q8VSQhAznHsq1oVVJtC8udcuju6QmWgjV3CidFqgJX1W2jQP2iotXsy",
  "key42": "JK1BwcxGGYDZu9YQ3D17L7GYPYJ8vhpbUkFCaYp8srErAwn5xia14apk4gABU1J8TU2AX4ymvs1JAgmxL7tDxaZ",
  "key43": "QuZiJv4B2ttvrsSNmt5GN2gGApNkk9TKx8XHD63mRYm1WMVVKAZXHUuBjon2R6nZSYkiQnmwFnj2meeBAgL192W",
  "key44": "HaD3vtMEoJdc8pGgNTLfKq7AACorYbB2fTzd9cfx9mKcf1vsRSEiLJW85ozomwXcEMCvA9BJYHbbkfrKvzcGpdM",
  "key45": "ZMkxuZMDS2PnkpMoRLaGiEKBxAmQbYneVKxV7N14Z5Uy4TJvmtzGvXmu12qJh58zKivqHaxfkLYkY6MitA8GDGw",
  "key46": "2gj1ePBGDHpfbxVu7SiHosKJGb8J51P6N85tgen4CweJ3HVytme85Yhha1i8z4ret14L6KXPjx87VeGmMicWxAoE",
  "key47": "y7oinVe4jRHaChHSx96iNUydpaXKxz5QoSr671bYMqCL8CZatbodcagUnQpzuVbkU3T7MdJmpC6Xgqbz6VWM6je",
  "key48": "2NTBXwXWk7i8aF8QyVR6i2PwmoEVxvfomQyksjxRspr46qNZ1wjXGgKhaQb4eNgcKHq9zYNEUN31biiU2dZQ2Amn"
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
