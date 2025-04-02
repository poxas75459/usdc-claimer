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
    "8Rq2y5gXzvU3SDCkbTxpQj1AjQHcZCFhGvWtnjuoioa5Xt8EYTVcSToEgczmt73TNSLNtksXr9jMALRaXatzzzJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qidaMXSkZ7H6jNx8s9gZrVu9ryWmLBjNk3TZLnziV42Cem8GawcF9Y31ubWhNYeu33f6whs194oyUVPHGwf14kP",
  "key1": "422FB21GLTg9DMENaQscZd44bq6j9jzzLr2LfY68ZF7nibi5epYB3hyVf5CWEhMdjqqm28qD92DMyuVfVZCK2TEj",
  "key2": "4qPdyrp7graH8JnyHEeUgL6W1cGnn2k8m7wwiU569At4CudJMjKRp78UztexJ1vRRMnJSB6edEntAsuQKLuSDjA7",
  "key3": "E9amxgsoSTqi2Hsauy7mbAgATWq1QsJTQ5BpSZo6HjGF4ZzpT2bXkQW5p4bFcdnLHSqRbAyAhfJfckafMpYVyWS",
  "key4": "4BQQZbiqvQaP8dtEJpHWjuTy9Pxp96scMVQxh3tK3hv17yDweSKm9fwRxB8K77ejdg2unq8gBanYWeWiFBbjvVRP",
  "key5": "ykqfuzzyAfCkH8nz8nCAwDebxrVmf94e7jSwB8HJFuHiZUf8MfqpwQAvgiJ166iixT46t8K83uTc1raMh2kd45M",
  "key6": "5afyXFQPu1aFkk7KVkNQQtD3ooWayEN5BUhdS9Zf1tqLPagadgG8vRpTuEX4GVB58sjKW64sJNZievn4kuxTPydX",
  "key7": "4H9ffK9hYS5ugUt3PccfmdUcT3D5gm1YbVND7RXVB1LgFhQFi2PKfCCzhiePtweXpUfhozK41rbRJCtFhWDy1Yef",
  "key8": "wySbzo98p1rUtrnj4d5hpNwtTk3chAY1dAeh6tSy3oruQdXN9zpUAXp5KUVudmqe5zk93nVHwnJMi9FksP9Lxa1",
  "key9": "2wgz8urZtUE7HTW7VzuGtZBRQkcZu37Yv36377aMRprJhbet1qUh8uf9EnLcpkggKiatmm26dTcenibQGUuwASQw",
  "key10": "3GY3JELQ1G7vHnh1c2xmXfujQrSzWgV2M2aZigesUaLfAhpVERtXwJNTm41Vq5E24ePQFCDe8mptgK9AGFSsHcDk",
  "key11": "3C48XURFrwMouKXc8iEt8T7jh6HL6NY7z2TszgJ3gFwLeLqZneuqZXh1TQf4W1YHB1aR5fRFowkbMD8w6zh5HAG8",
  "key12": "5cKEgPorfZMg6YyDyw7rtFroH2XXDH5LA4eBVxE8LDpLoMeSAXfTVay36w4AhzEUD6JYySMgWE5EY3fGWUcwCboa",
  "key13": "2siXgF38ByhnNoASVenNgBby6PAMx3vRXj6zRLBHhPU8wUxWiDUW9nFDC8E8iqJfLHnR6c75FmQzE5agTbep6rQi",
  "key14": "oWFyCnDu8kjFi461mEuYSV84WJGdE7tG8qrNaJTreXZFSf7rPuavw8EWgeZMWZDD339cv3v8mjzUP4AxK6Y76Ty",
  "key15": "3YatmaViSkoa7XdDVeaiYRzgcZojDgWPghFXE8VSpUotEnXqGmvtyrSTG37CX8TEsb2nokNRpH52TCHuj4ExrATF",
  "key16": "LaG3AbXgQmgfNZcqCUaMo5DSY3uA1j4HVjgJBRr68vchQjh6BdtxKikQvBkMdL829qvhhR85ha2BS71jR2SFMHP",
  "key17": "4cgcYMDtWbfLhZbjKzGSDoY4gZWWGGeXBm1pRHScTJ3EADsVqMEPbtQ8z4u6JaxCFh1fxat314xVFUCmxZvZw7bs",
  "key18": "bsZ4jahdckZkFbamw8HxYxPc83vGV2dLAtMTXDV5xcp4hj3bm45XfTXeqXzWgMQiTQYJ2C86Vn5YKa9ctbyzu8n",
  "key19": "2WNGGyNryuX7QwqT4VCnKGnNhZEf2oJ92ENpdNZJP2xaV7NeYF8KNnDY8zS5Wf5ZuYFCZJamSv1pwuTWDkjAust7",
  "key20": "5bpp5w2jjBx3JNBw3NP74mqU9Cpr1EjZWgqiQ7hCnF4bWcxVBc5mhqbuCd2SQwVVSWUjXY7k9p5i75mkKfrX5mRp",
  "key21": "4WJNBrQrhdeyJ7ra8y3VkqddvxCxab5a1HKNj6w6RitYmnK5De6M1BqgBh1i2JvGQbPCPMqGtiKPU6s8MD8gdwrV",
  "key22": "33MaLH36uN5KCADWuVG8duQK7QD2hPBgqLQJhRit58EnfDa4fcVqsGQa7F6qjoeqXe563NbxwnWDjLPBfxSLdPSc",
  "key23": "51CuUWZ29kAFPADMCc37yyVRpFLjYBC5NgrpByMPLnqqgkJL1vNnwGijAn7Du1qBeSupjwyhvNsUjRmpEeHAdN2J",
  "key24": "29ukyEtmLoX7m4Y99NViBi8x434bue5SnP5uoHwpcRvg8mGoa2bhGYeyL7enLKFzohTTMHr83uQN65To9BUL357j"
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
