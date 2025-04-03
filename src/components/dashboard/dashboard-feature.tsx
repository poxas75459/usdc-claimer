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
    "5FEvdUj9v2khhNEwq4Jdo6xLBopD6QCyknMCoRejq5cRG89mLFD2wWuEEVSfddiA6xXRzyboE7Ak2GdAx1SjyLwU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Aq3GkRZJbhksy72juVygMurJDXfNCGqYAXfdUc4AK3h54Lbf5496attgtDitkupvNA7GdZcgUaosm8KtPwEArzj",
  "key1": "n5LXz9yaW2JZuabuEMqf18mREvAfKbrycDTnAmX2A8x5ELaMct1eBygNrBcFcDTpeazREoMJkp1KSZKvL4oc234",
  "key2": "5FLNYzcisgjSWGyTKbEW7xkQKUVwjHP64UWfdZ94pZxVbxyohngS9o61uz6P3htcLLgGfN1xPBUEdSkg5hy79aP7",
  "key3": "2MLiGfXfDTD9R4ZfJsaLZ3tptzzo3s3qL4uCBWHiFksaK8ij34guiotEPTnpxn7kb2av93zKWyT1aK94eiWG8oZZ",
  "key4": "56UAZtK6vuxF5STkX68txyQB71WSy1SjjuRDsDqioY1Guep4yfu8vbRymFAoH65WEpZPWr1AJvbqPB2Tdant7NsH",
  "key5": "22Ly1f6ER15mtFE8zKipuq2hGG3GEnQ2CkkxnWZrL4kDSso6q2YduTpJHVFNkqBFfqYjPa4oosZSiZ6THqPLEuu5",
  "key6": "2Q7pQDPxdXGrX4tZvE2qscRHeDr2gx3tKR6SPccKexZeSAJCPRQSTzeuPVxYsNuo8j54UAZLfMLGPETQWFXgtmCP",
  "key7": "2jmvSxVXLoXFSsrJURGWWrwMFQ8ud49yXCd4QtmZsa3wpFRD2dAmSd6G4QKGTaKawev69cPbmzo2HNVKqrqmjkdj",
  "key8": "3gFjspaYriPSSy7WfANDFARmpPyyRLvKiJhhp9kgj4KvWr3UBHwDmzoqAdpemPFSxuKWVqeo6K1jq1tBnug1qymK",
  "key9": "2fEFi8rFFWaf7MNLJzns2RX85C9h8ZY2Wt98ucxYob7jPYRvmPC1Nuiaeuw8CryzUtCNLKWQSMxSjbTPczFdUmHi",
  "key10": "5qnQzP5YUJrZrJaR5UKfrvu4244okWT9xqUdGEbjvuwhzaxBCDd6hWXfwjRULB8qfUrEPKYNQB9RA7QJMszBa5bg",
  "key11": "3QkxvWonYopMzEUijZhcK1eVNBy5RqS1J14hUdtoRY9oDCeNcFJ2hNmFFWbo96YqDBv7AySmLfTZEZwdaBzKEuce",
  "key12": "3j9srEAryCT3ZpenFduKK3XqPSMAZubczhrqCWEkHYGkww7PFKWSvw3EMMkMx4y93WN8Yj8hy5AfjvhNvgvP8VFP",
  "key13": "5mLGAhR86gZz3AquAkX8Vk7jTXpszohFKgtsGHeXQ63qy9DaGkooLXKZJJCyk4quu9ZRtKwnaZv8bhcBBQkbv8nR",
  "key14": "2pFPdpGFXotqZqGtEZdSvu1sU94VGf9LHEKomtiHfZweD9WoCG4zErSj9hZa2dD6Vo6Mo8oyU3LriFWsikBpNLgb",
  "key15": "2yDc32tBztEJsUuXWtVpq1vFBsx8vdk8Uzhg1vdz6w73bczxzVk8oMStKBL8oSGRx8VR3oJFzKyy5JqdrQuYoAzb",
  "key16": "2rk893HC1h8CeWQ9m8tiP2w2iULDrfGKVARFxRRKicLhQuSMHyt7mjfBDs4st8ZBQxcQfMzJrQabz9ah9PsvwPc6",
  "key17": "KSTQAShrKbGUNsdeGmmRfyboGG1WxwEzqKjwe9sKGSQ1qhxe4prtEPwhxgHCc8hkDxq5ntHSzq4VCcwCBo5knsQ",
  "key18": "wLaEpTqjbHyuGkwZqSchbmKPpKxaGQWNsWhbUkcxA1X6CPLC8q2rsZVtxNQmHmdW2oSvmHKKCwnKxxDSGB3dANL",
  "key19": "3ZsoSPAoFVBPRNE7jotHULFt7DTAKMw2C18iBjK3BTnLzT3aE4TAhvV2HSsVofHeAkrmPrPhZpbFawZVDuWJvx3V",
  "key20": "4xPzVoPEMfSFLHEa9teJxTweD8N8SYAecAXUtMTJc8iEdWLtWAcHbKVzEMxsqsi28th1bGGTU5yiiYXZ79HrFZep",
  "key21": "4SZQF26pLGZB8ScA85AHsgAppVQZ6LFqNsjiX5Xktw4mru9CFd2UUL4smH6TW6dDwQ1Uyqt184Q8qvB73QpakQ6p",
  "key22": "3hM4N6zCPU8i1qjM8yLQ7aXKBFBe1N62b3enkPdqu5LVpDJAAbneqdmAKtH7U7Lok7VceSRMEAagGrjcUrQ5aCnS",
  "key23": "2VLgupdYtV1d4CJRh56WS2q6ebPi9ABBndPKgBKNMp5YoSC4dqEZkqTfDwsR4csW6tDcKxjDttSRHy4YG1hDND7S",
  "key24": "29NPMxJPRdi3MWpiPnXUeCvWqrUnEtkT2UgwwxRtefY8NHq9VVrtXfcRqHk6qPD4naqsGY2DX4GMhmAADWafiLyL",
  "key25": "2oyeWvx6sqzL9Bm4DJ2R6hpV5LGP7CbC31YTJQEP1K4gfMoVwm9fj6yWzY4PA1GWcfiJmB6PKnFR1QgHLeXS4KpA",
  "key26": "4ShHVyGS2dJkXBjTrwvh5PdMLUV5EBWxoViPoAvsC5GnSsYFLTuFXrW1tKa9piyHECGQvczeroHQRwHVjP6WpWeb",
  "key27": "LDYzb1KKipS2Dm2vr4UsQQtUVKXHGu5eLtsj6x3R5MBdqhThFiKZBADc4TAjfw6dfAfrguzKr2C3Tf5eYXKLRaT",
  "key28": "EsecUQFGkfZeJUKhoQ65JSxKp4EvLb1JPdERGCUtkfDXhAFLAFKfQzLLRLVPLUPP1ZzHKMGdg3Z9iCX1fxSERix"
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
