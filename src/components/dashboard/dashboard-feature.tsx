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
    "4pefALyskGekMfgaYwHGG7TKm69Mz5HA3aLDY8bup7pSgZjLDryzSqTzki2NVKrEFAuuehfx5PG8B4qzL6E4fdCZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56cXCKNrwC4xhAP3gxZ9ec8eyU8NVeWzC3DiA8o6WUJYyQFEyGKRTxh76GPimGTqin26QHyvnkDfxkDfVJGwMJn1",
  "key1": "uckRfbQ32bCjw2St5BtCCse1o69Q2zupxk8kUMazeinYs1bMFTNzPG7eMiD49YkzDB3vdVYRLsGwxnc8iWSVmUg",
  "key2": "4LL5nqW7AqH3LxjfohZPGsGaRR9MhGRQtM4hmxCs6Di7VHQ3F315uVKzuuE6GFpRB4wTp2U1YLRZdDddw5xonnYL",
  "key3": "5WQqvNi5bP4BRrTj4VryR9VVuNmw914gbZepfg98fNxyTWWvqjaVmRSxuNqbWJrR8KwNy2xk33RvrJBZZQVyaDBT",
  "key4": "5xi1RxKV3pbpvPkbx4cKU6NVo7mmpC2VKFTjrnY37tMrdWxhLFCZc1yBaZgL6Gk5PX8Nx7fbgrtSAWvGMFyaZWKv",
  "key5": "AK2K8m4aqMTzzRzdWJkoce7AvDbRKbtcn6KdoP3qCsziBw5c7ZQ6jq7N9b9gQUszuSpVUnhire9X4RcZCBkkE5p",
  "key6": "UjqaNd7L3u6tKqcY3ruWjG7PUrH4ubyjM5nzMXPEAhkxCWDST7WKHsz69EER316BX7enq9Te1bR3mirYCGHXMLe",
  "key7": "5Drv3iHuP2vCS1hgWffjCP7M1Ws3iFxzVXGBUzzYscAp8LWmK2G1wKQMnrTV8JH8BCmuCD6n7u8i5kn8ZhkHCMBb",
  "key8": "5uFHV5HXCnhdHRqFqUP65pXkVteuSkf6BAYVGWBVGrxxQEKN3Xj4MaqEXXF4o8vYbav867AVnVhLbP4fTKEg5kU5",
  "key9": "2gBcpgC3LYJzPWkhCzqa7yDQ3wHBphQGFdXsbqeQuUiHiYaX5yKK3Yy9yKxavYai81XQPqWJFyxrMernrULjtcvy",
  "key10": "27pWq2jD1S65hZTYg2jS6DSj7qMrH8ddDNzz9QXQh64TsGcE3D5xZju1agAPW8mLAFQNAjNfHmoYmHuRYb64P3yk",
  "key11": "31GNGyrEXVCSjqENzfQbucj3SqKD4LjovfjCb9pg1Vo2TCr3vRqPdEfNHXEoKTihVYndPsqsLbybkBLfkMU7az6s",
  "key12": "nwe4eHRSbHSv46NY6pZF4kKqmrftbsPHoeMMvfzVtUTP2bP8Y6p3JzyUQwCM6bJdUBMs8e8Qyp5oAY3VTprMEyt",
  "key13": "4fRVa52s9ABJ9GWXMFzWVWGLup6ZQ1NKP5YBEX3H7LQpa5oQdmLKD32i3VNSHz7b23hVSKK8mpw8NLtBf47MaFYB",
  "key14": "62JHoAk8yaVe6DFKcWfYeD5eqmbcqwYRkEoWjRxxGEc6JV5Q87CFzJXwLzaCCfkmzPKbLiBv9Yfq6kvqWR6xZzgQ",
  "key15": "nzcFxx7562Wh7wCJSN2SvJrAoHixRgmpcUyLfcRHFj1CKZ83NH2cxVqDopmP6CcdJPHUVdtxwXYXQrirWeniKEz",
  "key16": "3tT2YiWDxL1CCYp43fze1vpn1GFTy7CDkFHkLAr2JFfVTyFMzTqNF146pS7RJN3VswsS264PLiMMEKcBnsbnyfuq",
  "key17": "3rKimt5ZrBDMandLo7hMarJ4UFyjTfGasVQUsunCP8pUWUfsRMFjL5btT6RjPijfHb72Sbryji3e3qEpnQttt3Yg",
  "key18": "NRe9gtzqZWyYVQMYiL2Tn7LKDzAmURcZQq7GCScTTnEw8Q9N4cevkqSJ7wkqVmJhZwWJ24VhZML5Spu5xZjSY9d",
  "key19": "4boVJE2HGbdya342RdFZcEEKYR8omLmEDJyFqUcpZAQDEzafuge9rn7mTH7VUiMAMff4qMSYexjawTyaGhMhvGAS",
  "key20": "4oi4PvhNeXhpiKS7M1xVqJSmrpVFZ1zV421TiPTZ4M6fDigA33aX4tXpisQtG94d6odakb363B6t2nFRZoGdZ2Pz",
  "key21": "5tcEFiDikMxSj2RgMCF2F3enWFr3z7Q5w1jgvFWfLYhg8AEumU16tHbqsDR3MPLCoKTskYgJgAxJfr8bFWRv3VBt",
  "key22": "54j59bVBxbtVRKaUtcrR7zeHToNXxGdc6n24Pubw5Bo5mN1dkrLCAtBTTNSsuGHJfpERJqTrzLDpgHhNovD4hWSC",
  "key23": "5GAhJVFCGzVPKtWf6872YrjHv1QupGTEjNvMmwt5S4fkqdXfJZohaka1R9GKLSNm4AWbv4B3QLCw4xjdzHhKLNVw",
  "key24": "3jzZWz4H2HT5zFDXH6jgmGByqAb3pez29TUqSoref4tCfs5RTrTodDrEBdDCyFCkoNyN2xjhiN4zGj3fgyzCpLUt",
  "key25": "53JdeHJY8DAWgpVvjftetTyccyUghfE1HJ87mhungkgheYrEYPmg17Vj7iGLtY3g4UMpoPNxbSqD56gonPrhk1R5",
  "key26": "2KbxUckrdMnGRpffjx4wPBX2rC7WqEM9dy27ugYY4LtYoTV1yZjoMAHAn6LoaJYRpwrKD5Ae3v1V9UcqD9vjoSiA",
  "key27": "4FvLtuLXvhihUC8vW2EPeveMSK1gtZXmxRDpoNkZcPtmXiUydvyYWQg8zZwAk15PSLEA5CtzHNUK5zRgFPMFiwjC"
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
