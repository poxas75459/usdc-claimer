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
    "GLUMPELg5kJ9hitGvBh3iK5NvTKZ6pjpZyJQnnBTfUGmS8czGUTrzo3Hm4Rb6xvwyaHaJVUqduCWaNStPtrauZS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vGwpS2T8R8Qq29GawbQf2d1XhfEBGf5AN1HJDmN5Wo3ipE4USRno498nHhPBN4iAybP9KwbviJFSPxG6Uarg6RW",
  "key1": "37HtWn5RWzbW3iLoCsb2x52RE3FZ38P7Y3UnsAffLTNmnoZJuQgvNGwDLmN5JkY1WfTKGhyfiXNc4yFtrGd7gBci",
  "key2": "3ksgujumk9B6MUFPWQUXqCnUSaSdMReCusBXp99wAsxHKcZ6x2Ems8V5jQSpojChYobpVMQidE3MyfUzCUCQDCam",
  "key3": "WPbRCnmforwZMSST1QFkNo3ZL5Cbpr8emAHRrUasDt1ZT9iD3f79vtkKoWRupfxPzvJwR3EQtX1iYcqA8zx3udk",
  "key4": "37Depxc2zuwH6EJmMViseRKjAHeNrmB3d5174d9DgfuDoXMH4ukzudYb3mcrJuYHdprMHtd6fjsqyfqGX29odiPr",
  "key5": "51nJHTSASt7Qk91Rsmog5fFu8NkcKLo224Pa9iUuB7pxZsVkokZDhPL2viyEXT6z67iaJcPB4FCzWFnWzxdGtSED",
  "key6": "JyEgwdie68whHcoRMzY8f9YMFoNRhf5f2mKqGHgWnaMiDK3nxQH7LEfktKkjUsTHP4fvrRiEhArBgWS8NaN9SG7",
  "key7": "7Ey14zyGh8gJZtctTpZfBKzjZpWFEHF71eCVZk55Lbra7b3m8fP3De3BBaQUACJz5hfvFexVveZrn51R1NyxFW1",
  "key8": "2mSWPsZHJzYESLZzpny63yXZjD48GZEiZreAivZ5HxaFKwkMougANt6hsLi6f9oArqpCNfGZHdTF6QiC2cYqirVh",
  "key9": "3Kq8gQfjKxazuW7wGoLPqiSvZdJURbe28HgMut1wN6BmoxtNhZhW42Z3VV1LA2ph7daP7XKJMjUEEgLG9fQS53Sc",
  "key10": "5jVy858MGDLFhA65dSoZdYAHTbkbVwHVfUg76kGiJWiJZfFC3esfrdMdB1Mj62naUHjbJtqkZJmj4Fq9dRXGQg9B",
  "key11": "56S1TH94hKfBVPPDSXk4D1qz67LUjvZvuRz8gcgxQD5aetmG82W94E8g3rnMp8owTFqz8WaMnArV25T9xF4BcTJD",
  "key12": "4RgPm7pW8zqqgAs5PTcmypZKLaYj8dRJghTyhHseofhhHaNLFyNWK92hVVYcTvk2qKLpMUrfiWoFtyoB2PxdTZKV",
  "key13": "5RNNJFAsKS4H24sb9Rkhj1c2fTcKVTqtGGW9duAVAy2pFmPD7MoVALjRSuAtT38jVf4ceW1i2a56DQ4PiFVn5MBR",
  "key14": "4oDiAC5P8iNXC8yHfpwPKxouLUSiqCkmQZuTNBobfoqkCdNJ69TqLN9rtHDDUsMRXCCSi5MjbMDzd9hNCnPbbJXE",
  "key15": "m9krJKFPvwigf7XCbsYsGPwi8AY4w4XarCc8Zdt66VV19UnXnbtQg8879RujmMQ24zGp563DpAm16A3vQ8rhYUo",
  "key16": "43TGt7ZFwUcKBWAtaqa6W1Cu3A7E47cQV3UiUeTx33xRUFJ6TzmGdm2BMrmmkYF1Lz1mF4XJHhkh6agD458rJNaj",
  "key17": "2TLZtSu66fDCcKLNKBp2sD1bhA3HbeYRys36SGpLibFUrPgSG2n3VhvtSp7yPoC1Jnw628yZvx92hrZzLemsxsF6",
  "key18": "67cfj3oR1cqdhomgnnroBJrJ3rdy8n2esuWD4gpWwzo2y1GH4kuFt7qijadiS5ksC4q2PVLkeruhBk8cSAFpPPSh",
  "key19": "5kbQ11Kye3d6qDXrdMJX6RhaWKChSQSXAReeFaR3nXxG5mo9w1LUcP82uXJRxfGqJDRsRrjXMXaPEqgo3tkLpFrE",
  "key20": "Ce9cJgaCkfytHP9N4vBZn3vUt3UT3YGHkDgNXfRvsrsPMo3CA1r9X4wT9xZLUffRrxBS9DUU2EEU5eSygbMAmXk",
  "key21": "3A8nwWzuUnTqA9htmEEV2ncnQVd7BoHfo6CUu3Rz768FhSg4KbuDX5wpiUiLD8ERtTmp8anaTNUwaZNq6y52pgdX",
  "key22": "62bk5hnowoAs2E2NvMDmfxbntHdaspuawDW4UfH58S5th4hUcsxjLbpTJS76TAhA87mKHtHFi4rj4Txqr1ne6n3b",
  "key23": "3YeTXVYrGK3u6Z1yiN4NptMhALCcSSU2crxMVVKXBawDfkvttjcHMBCDgLvucJwFK6Y27xCQ3yXVQP5zgZGQmMMF",
  "key24": "3ZuuAc71AMcYqYr6hMTuvir97P7yFMsctChZneZKVZDeMe48P5FKrX7EaouxCeD46VuKvYgZF27Rej1adu5S7o8J",
  "key25": "3tixRL3E6izAWAj3EG1HyoV49PA1Pyw9JmvwVWHjo9fC1YyhM5mrd1wS8WAsvP9cYaE3kGjjZvTHvfMU2pMJvPzN",
  "key26": "4DK1Sfi1YURQ2RSHEap4LzbrHmdzozmE9y8MMDDMx63fupUKXesjJUzGC2AwHS7bnjwAzwT3ZvpHVJYvAENMxLZr",
  "key27": "5X5MNzygvgLeS3qAwQ2o25ggBaRsaMfLh58cGM9N3aJahQb6dBtX1Kg8Vk61ABWbHoNtimFNPe7mQgTwEKVWMU2q",
  "key28": "3LwwrHovu5fN8DbMVBiX1wJRSJ68Mg4EYu3YG8T6Yoa67sV9zda6kVJwbqghAMtmE31NPKWPmVjd6A6577faGtp5",
  "key29": "66tDazopVnmRFCSMBtMHZBXSsAQyiBSxV9sNSKRLTx7q9UXKMyBpG7UCKSpTyL2F7rckXzh5RNDsykiB9qEhvXo1",
  "key30": "5UPxTH5rD4g4ErqJ92gPqUC7dBmBAVQp3LvB52dmUuSW6Lrkg2L7sHoa1W2P3JbtXPgjWqgiLcjaEivYkQ7UkvGV",
  "key31": "QYgNztejKuRNu7VSHcb5EUnq6CiQTiGb8GABob6T3eqkLM3BJgLzvszNUtgAX8DD992GJhwRSUenAn3VhPtQXVe"
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
