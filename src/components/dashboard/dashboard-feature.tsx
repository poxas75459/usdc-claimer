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
    "3UHZdE2kYEqsi5LYkiRhY8yTvJyeMCp4mDxs8SmJNyvveemhtgGB6Yam1EYRBiGuoLeUJx1X8mUhzzmEscVCHhRd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SU8nPe7dmyaw9FY5k49Nx2W2S2hWbxTk2yGgAvcN2SHx5LqbwErXVcGUkUe6JxUBi2KoLscWdtVmYEUHPCoCaLR",
  "key1": "2uRSEkqiAmw7DaAQ4mRLVNMUeDL4bcMtEmRCCpYyzkk1Vngir1yS8pKL7BoGDtHQE3BPJP2XKu4p1v5DuywaW5Nx",
  "key2": "CQTNohoJt5yMtUzB7LQamwmjx8RQdjYi9gm1VBkEZ7nnhS4QqxhKkjSPJb2uCuoHbbtEVfiHyHjiW94ubZ4Bzcf",
  "key3": "3EAh87FA6FWLks4TVDGp97S4DiBrit4smv8ArmUsiHkCaJrZoWFNmiFSJdJxUsatoqanBHTsnBV5XsBXadmb6jmJ",
  "key4": "2CNG1ZbsNgXrkCwV49sSuj9XgH234RaRohPrZeNLJUzm2jNiWyvustfiY1nWgNoKfQtFVNc91m9qREJHQeT8w7Mt",
  "key5": "7gMh8hDZ1E62S8fjHgxnMXadzPUmxx2AvipDZAmLvmhFdoUZxhn9Z5YejZMZHF9U2DYNof1ABnN1L8xw5sZ8JAr",
  "key6": "3UWM17MWb5RxfYkVyTjbkFkXiLAkfyNSdoUezYN3V3D429gNYSzyrq8Qhi5cQvj8UBmiAFTYrBfZ5GK7HhFkjrXj",
  "key7": "2trsDk4rDxYiE7P5GP7aBujjx44Uv9FzW2SUJu3u6qzYpQPcFKS8hRZE9mpHCd7WvtDBx7fZ3CdymwW94NV91LDP",
  "key8": "4XpUgDWV3DMrp4WsBmFaesMHJrdx1XPQ7XdJ1WD7FujMN6iEewUaxX3yMeewfGxWYZw3W35pmXZKjJLnPpJWi1M5",
  "key9": "v7X1eiejYZnX3N46DukZhxrkQ3vRAj3T25UrfkvB6Wh1ynvfCPWy8pXTFJx63XejsQUiqaqG8JphvTriyJbd98z",
  "key10": "4abV12JbAKav5H8Nbjvy7x63urzc3NE4V25QAraiQBBxmTBpgEtQCE4KHV83zUvNSxzLXd5qRximAhtWXnEg2cSb",
  "key11": "RqyiSPGYM88c7sYjSMKxZCSavio4fwfSsCDxD24bJWjEbnhsb9oWtFTg12gJhWmFG8wNovim4T31jLwF5tjU84Z",
  "key12": "cLMUpWTY2BdTWJ21UUziVznKQQ49MGWreT25Xxe738urrmo9SdaRPtB3n96dxuxaPmajUbFr9mxiFt6kJWGiHAM",
  "key13": "WG28Crij6R4k4P7NdE3oHtXJVo4eDLz5i1HAvjejo81rUwiRGmnKBMszt3oASv4C72nkTFGQPwDWsacDKap2kwx",
  "key14": "5yszGMbrtiff16t8yF4rDHtujApqW7XgwRHybYYGGZK1H5QfWKG7KYfTfoH8tY5qn2YCp5TL9bSDPrFUgHeKWYDP",
  "key15": "EG9EvMvvGn8b2AehfBGcLLpafsf514BzsBMe5oUtgM9GsBtQfxtJRBkHYfUKdizxyc6hoSjodmDrphPL1T49GCk",
  "key16": "49bN4197do1LMaNDAezrKwqTGeyKQBJiVow7dtaF4fNYa11p9CKex4NTwwWxu8Ykq6tfBpoAHJW2k1EJM8ucs3v3",
  "key17": "2u5LoqnoovZTbJBfF4NuF45vVGNGBuT4wXvdmzKdLRn2wWELZqhKpTgNNaA78LGqaYAvPDENPHF7f66ZP2h58VUQ",
  "key18": "4fWf4Nrr1zVpG2L2k6t2VC3ZQ7rX18LGKp4LD4pH21SbXzzg3STFdrN5My7hub4cooc95pVzRMQpSt5UJxj2JHVN",
  "key19": "53gEUpHwkEmrm2EyZ5YfACAPV96EBYaoqiroM2dReNmKLR7ZdV3dJ2TpkBn6gJ6TtsEWmWryBrEQ7UAEANAmMtVA",
  "key20": "3gbwzs7aChKqdJU4Z7Ks29nUR3DkwBC8A7winFtWMkrLD3yPzJK9b8qA5gTUCj49WgwbrdFosRm1ecszys1752LC",
  "key21": "AdaJ8TcW5zNVRXjf81h9BejapL6z2qcyASAGPCejT2kWr79zv3jkM9jKRc57Mb6TQYkKLZTcGBYwQCrmN979bQK",
  "key22": "4iaXqaaQy8YD5Y83z4JKCwmSJ2qkfkS9JFtKq6sS2DpuJDbjcsyGkfqifryN1P8jMEbYQ4V54FrX7PheChzoCa1C",
  "key23": "iST4NsQRswD15QYytbMtSqyjVGNMz2haehNGKKLLqSRSeVuoF2BMbRNEeB6HVxEvPyn12R8nUAXG8bnkyYDS3QF",
  "key24": "kxgRaAb93tQ5S3SCX7HjdiGKpKdDdSLifHSU9u6rSG97aC32QefQ9m8gyqTsjVE4w6aNfnh5FSSSYdqaRMbu9Mu",
  "key25": "1fL3e6Cg4jeZoqHRyrtbXfDALBtSzLVHyMAvaojYikG7LrgEcjKZgctEhj8nNeP3oFPymkV6SDsCumRr7BVvykb",
  "key26": "24XtpF3SH9XJ1AWgbXuQPZxpVrZAndEAqtQDtcVN1fUYBMuS57BywnXjdo1ZnSDLJij1gQWqckqx3Vyx8XhX1RDr",
  "key27": "4jbhyUsrBqKRg6Bi8Z8WebEkNRSL1LxemVZpNCQZMCY8AjxNzKdYvd9S7na3swRrKTL6TAxDX4zAJNxto1iJwZtJ",
  "key28": "4GVfyz9un7kSqHqGHno88YfAvXiUvSdPVmGc8uzm3cPtE1TE5FAvL3G6AA6bi2dFBshTrd9gEfkLm2cRRGU7LwZ6"
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
