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
    "28ewiFFXfPJP2QEPYL5nzFXbXmgDk4xWr82rPYDVkwAQKsRPD1VGRCWouK5EzWihdF4gZ93eASbiV9wmRdwG4pAX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mHdSNmce3Y9NB7wbTcapgR9ojTAmJ4iciM47C2HtwW3eGfweeSpH125WF3bieCErh9H4HUvP9UwPzgjespbGFaH",
  "key1": "3j8W78mMjHCmTfyoPMaFUtaQbTfWshZL5FDhmWJzXxxuCMWRFEzMuimh9dVY1QZNeo99MUJuGEJ3VFNhWHN4uUzj",
  "key2": "2RoHXGyBQwCiYGBNMeyw3dGhWsStFEfqnnfaLLVxdNWxpHuprjWsWuNWn4CPVpa7WmUwrWoTF17i2tNcKhSa9N6o",
  "key3": "2BYMXfJFZZJ8j4ktwacqdfP3Q6h2ovXyRW6Bu4Gb99fZXUfXKpBLoCySSCyy6gySSNxCheJbxouTZjqw7RQCc57g",
  "key4": "4wjtvmDP3PqvbDyPTeBGqgSaWqppCAzwx74c5wR9Jzhyso53Bf3ecj9aTCc9qmwqakE1yAAzhjbAjoo3oTWGgrNj",
  "key5": "519gmM1xtkF5emod3sgwuDMv3LKVWKx2TQXqWdmP7n2uTaw3KsktbSML3xHjvWm5NrdchGUv5LiTviC376DcrPEk",
  "key6": "4V6ERRemVw2k8Zn23KM7cSeXEoBhBvgzGzoub45CNz1zuz7b2Mym6FNevmxVpey4kMozqSeg1vMv6aE5R8jZG1xH",
  "key7": "3Y7NEPMXMuNNTcQobhDpvEJGh19XRrmht5neLoy6WBJuEHtMN5XarvmSx2UUW7XshWSTp2g2fs8N2Cm35q8RHjNJ",
  "key8": "54tqtC7jWeeDMWW4xqPUHNqArU1bDkMd19hejCx72q7iCYk6RtT6bTi4z2rUQEjkha8AaNb1kiD7BYqHh8VP6ckr",
  "key9": "2wUYwWKmX5CyjgUXYowMWuLCGVP9PFGSuGn9MrrEd3Reywc57Aomuj4efZiiBQbyDXGzxT6fXhXUkjcyWxNSuv33",
  "key10": "mRtDnqzSprgH53m9HZKgzDAEyZ49LqAZQmCrUYcJnMqCXW5oTce6hP5VKPtgdorVwCi3vSsYgzp27idnDAVUTDo",
  "key11": "5ZsMqZT8SE9VPucPAdawL7KWEAvDyXhmxAoZ1cZFYiRtbjgospxDpj35Lq1vCfb1EJVeVZjMHqhR71zCVRE7CZhw",
  "key12": "3quWYqs8KX1qkD1ERYHcFEZZV6csoby4SVewPfwGMmQ8ekeknpCsjf8MiChjwrFo2YHCmqjLfqFzukddoLHhRu7V",
  "key13": "5nENUB7FYMUwLfGFJfwLRMZrHWDn8kDmMFFhvmmo4SjYFPfrBeRtwgXAbBKS2tAx9cQGm96bRjHUibiJnAxzyipX",
  "key14": "RCw5ui3SARdkTCAE1nDHdYmsFkkM229GeSwEY9KdrVR3wuPXH1srPWj8SJAC8QxAa93ZmXaMfrTXt3KQwF3NqLu",
  "key15": "59wPN4i6MSzjwNXVuZszTjVbvwie71R5CvwQuKHXde9VrqJWvf9RfSLnJrxEQEPnoiyZ4mGLU2MKH4goySxRhpLz",
  "key16": "3YRPRezAPcR5DLb31Tcy6S8CTnxDe9FeawfXWERQyw39nmHvDzKjmHg6j7ywbduzDzJ7wv4WAJPnBuFQVxDLGnnx",
  "key17": "3ejfmFNVMwdD6VabFiMkJYzUWaPsxaU9j9CYT2XYcvkwVtFyRDxquAneXijsnaeCQ4RDb2jK3DWt4ccwgTNmXUCt",
  "key18": "3unKGg5o4mUXqtkxEy8JLAu78zqAb3p1rWAtQ5aEs7ZfSoBijWqG5VvSDwrCtq3ctqViX7G9JM5wf7J7iFbJrJrx",
  "key19": "3mFqSQDRWn6niB8N7XJmkXbwzGHoJGHC8gwNuFXh1PoEfZk63RHAxDuefr3gYm5qa18ymHtCidNwztunkfJKzjBM",
  "key20": "41Rmk1bbYSdParAkoBwaViokMLL7ALpnD3FGACDkdzBPr6eCzRS8Xa8pE2trNG2d6mSkYKHkrdxbs3mkfVjTBepd",
  "key21": "22tiS1z2GjVxs6zvdXfoVQCM7yD6Vs24NYTKgUGgNkUrw5GVYgJL5JVWQkVnJSLEd4QEkmGvYpTXyhDfCS8P5xrz",
  "key22": "ywgTskLyj2ajfDRHpZpmH415zSjzuyQ3bk2R1EXG6zVbHX93uaHZJ9zNRNJyYdvFvNiGSP7FB1EpNWJ2h1ogXQ3",
  "key23": "3m24PhGXhhvsCSkwtQ3HmeiCAiPidFoduR7gL3L9CEoerhW2uaNeiwWxbkBnMFJJaz7gvuMW5caoz5ndXBqnno6c",
  "key24": "2PvuVBitvE5VRASPFJJkDcUvQ6hMHkYcubWXYTLJiyAtHhQfDQw1ENmTaWpG8ey63iqvcFuHMfFUwVsGB6up6Vnm",
  "key25": "NP89ogXLyzanoZmNzDnSRpL5sXp1HJvtgjdCC2tLNtePbvtE16PmapFB7z9xZ7iinN5mgkpxYeQSRC6GLKrwWEh",
  "key26": "BnwZezEsFs2wMfJfpnuqFyaZAGPNgHjebJomHkbzLcLP2uiT6hhzepckJ4oG6mU5ZTZmz4gAH24fBuqBCN9Piza",
  "key27": "9tdq4VtBAvFkoU5UnNDVFB1fGRXSiUQdTKBc8Qv3aXMFVxE5MGSP8AYGrEqW3t5DiorB4RZEMhhvwzBk2WpSWiv",
  "key28": "HCahvstys6a3hnWbh9s13mi52snb6fxuJ2Ufhef4AmtsauPwRuQcigopodKVAQBDKBSa3nFF6ZkXkRJL3URhcpd",
  "key29": "4H8a6wBF1er3Vt6WhvZgEPL6d5mRSSiemHCRS52EKGsTqW5ntYRwLjGcyuLBBf3MR2tnZJivdE3Kg9E4VwhoujHL",
  "key30": "5thxHVMNZnPDLE9ccCBXjysvsxmcJH5SknEvUiHs2f7Cm8dM7SopxgAyBH8AKzBQJ2NFho6rGUV6CEMPud1xeWky",
  "key31": "3WnMYVD4ixeDjjAeVL2GkQCmi4r4m668qgmHKCk3AzodWQMeVuxeBfyJ1AFxYx7VHX5rrgVA3uzDcwZjquRBbFbX",
  "key32": "5icQt5VJDvPfw3Ah97yZjppYcfj3Y6q1CppWXf8fiHT4xQsiedJjPSn1cZumjo6xKk8wWtoxs5nswq4Tt5NShnDV",
  "key33": "2ZqKZ3DwFkFqKiuwczCgRg65igc8zL6wYTwivboUXrjWk83cKAcGgfBcRKg3sG7NBEkjDgnUs8HKP4h2PA8yJvPR",
  "key34": "3TPVEpSWefLHuskrzZ6XBiLNa5hNZuwQ7e8X65kYNLUGBUoBm6GrLD3ESmN69iG7E5P3aFcM6EmZ1k7p36vUD1i9",
  "key35": "3e5Wj3V3eQjPVYtqWAHAdw7X5BuwiFNkNwEjgGhxGCedX13y3ZVY88NpKJy7DL429VVmSk7mKkSaZswmU6FCLP7b",
  "key36": "8sUP5bAbTeHxGq7Y7sa7gPhj1E9eCUrm3rw6Da9gGurqoNtthK6AHq9g7HTZ3z8RcUu7fG1v7HyBqFqccRj44RY",
  "key37": "RK3k5YrFo4bZMd58eLTW5gouqR1amLbhhnPeoptc1W6xbuwCMfgf2Sp4GxiNq2s9qPP9z77mjCxg22cT6xGT5Zt",
  "key38": "43Zm82ZhMAD7TceAkKqV6QYUt32mkoR99KAg9AsNBiA2RFPXoMFtBMoKJsYz1phDnX3AXbN9PHGRHpNkBojgUvFN",
  "key39": "2wPjwogEj7drCJEV7UWGHAtLY2iEeYmKW6KPSauFRwjf11qJBeAzKwpracAWibJ2LmDcjivt23hZtCmsbF275ahk",
  "key40": "zH8KL74eXqcmLun2eTkGuw5sQx3nHDJDEneCwhr8ekPa15BsfPXNAQ2zPMovjgPcbQTvbceH9axL9fpka7UJFNG",
  "key41": "2N1TWqoLhCJr4MPU8m6u1KJjQwKPt6EosLJ5WJmy1GgSpu2ahJahnE7oq3B7KjeicUXWMQ7GFHSJMShuZhP3X54F",
  "key42": "3comc2K9srQSVLffBTGh3XgSRTcE1tmSFAGyYUHeJDYkjirAsJ2m1TW2teQUj5VimmGdiVvdSsZpr426a9eu86nb",
  "key43": "4gat7E98hNAGguTGDtKfeGh7qaR1AMiMqx1uNQEWVE5XXCBGLBKYC19qxgCQvxUW8wx9CxijTx4jEb18QDMBx8Hh",
  "key44": "5u5o17y9rNoAvUr5QPKnYBEMoMgwaMpQBAXVnYM25jVXorLyXXUEE5suztg6DDvsue718GRuEqcUMhcExkwDCArM",
  "key45": "ft5SBfW8KycasZ6gd8y4dXwqsypkEvJgxc6vGic6jXv7WU4moHbUk1cSQ1QvWs4nsvTU5jkchZJ49w7dvZqRkeP",
  "key46": "wRLqZmpteCNPzeeT7qFKAFSW8xMQFt4dokUagXLHZn2JrcVXF4eM7qBqMFzUNC4ePwrxmF6P7AtgzemS1mjirKH"
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
