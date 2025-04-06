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
    "5NhPdoNmEvXnfvwXwneZtm5Jjou2jFYr7UWSjHFVtL53s4KQSnn1oQpv7ZgAH8q54fKghzrZ2mGKyY92r75WwkBn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cKAgnVGsnvMAuUQXFNVMxBLvAEVZt8WXGZHQeq65PCjmdicoLinfk8Z7vNRusfgeDuTUHsF9mWNw7DyJ6r1xxZA",
  "key1": "54m5ip4pBVWQKm8R4c8ejpWGXDkdWX1u9hSiiimzUFqfGv1XMVk3maPjHo3TqXF5Xe2tsvxx5v5E9ueB27TgxNN",
  "key2": "5mkoFVTNf3bVcJLmjzxrjVgpY7D6eG3TCyRmgpL5GEDHxc2F62qCgVLdDuU2XqCC1KAURmQmQtPSp2SCbunNhhh6",
  "key3": "2wW3DiiQeWWHmB1u924Yn62HegtG9vkU9HWRMjmZJjWzhUG8TGCUs4Yf8m8TtrZwuyLANNZ5mHethgwPwv6mTHWU",
  "key4": "3DzpaivYRyU546j5FJ2iKGoJUGUkUiqD34zyhMdFurHWLtFDtQKd96cAcsGY3hvmhY1WSAEdezCgJvvgZ6nhE624",
  "key5": "59xcF7sR8UR3GwKRJHykeeAGr79xFXe2bhPzS6wU99hSoGmHfkfyMwBYDCEhm5fWER1shxi4iUdd95w6heTMJxFG",
  "key6": "4ZWz83tcfiuUJJgf1yKeXnrs3gBozeRrkTrF9G8DpqgngEF8GsfdBFZtQqfLqGvpFMGF26FcMk7zdYjaSh3rVnCe",
  "key7": "vtaSjMb8TUR8tqNqmbaMQ51T1iKRNf43VBufNQUcK8haEVAk4mmZTn1oafKsR8mPvE5VMevL3tmayAScqpmDtL2",
  "key8": "3tEJigSt4NFEwFqUKe9E4cL7dNjze2vuqrfmZzM5iUFu1bSFHBRU2174NhrGcQgSzkd238Mw8iHPGayuNP8z9ijM",
  "key9": "3QbG18Qm7LfY5dV2c9dLxYgyM7zZyR7g14aMSrz3MQRZSzbXCxXe6F9zF7f2YJzENtNchRkEGgC5iTtNJ2LgoKr8",
  "key10": "633MqGoKMUtwAJxZTppVTs2AhaCZ4sy5aGngsiLERqdH5DdyC9AE4PJQFm2bc4wnJEbisFLtf6J2tBgpbr3raDKh",
  "key11": "67EnYZnZpzq8Fgm3nt35kmZ7fUQZYWde9dHhLVSJMfRrBeQXDDHB7j5dJtXvSBLnL55CCLhp4fTtRY4PfEGqneX4",
  "key12": "2BcZbwtt9jxD67hK6ww3nwTxDwJLpEgW8MbjEsccPQQuHq3dNaNenbxYMhRibrsUowoD4ETMQQz5QJi84TSBXkP3",
  "key13": "2XZnw1hxq7Pi5xfeW5rYjgoL47UxC248PsKHVC1VWAby6RSrr35sNb5RM8a26ttEYzPjrBjQxeush6gV4bkbXD4Y",
  "key14": "3nJdiMv7WwoPRB35MwKHmp3Ge1LRBMy2Mkn5nCQuegi72GMadjHJ3wY9EbEwHUL9ujp8gkrZxDFPV4ojKUJ4qaPS",
  "key15": "4qYubhZ1cn5nd8WqN8urnUMgDTEK7if2Fwi5riWQVumXHM2wea1bkHEt7S3LSsACFs6xY3piuJrVw4TJuvZheakx",
  "key16": "5QBFn19Gbs4SsJLYzd2CNZvto17L5AbXFyzs3T7TB8ZXXTYxV5YaDVvEGtDRaYPTHgeSC7Pts1fF78kufS7kwbSA",
  "key17": "4WSqCLQjiwMCDsJhDgEf7ANcBRgzmniweLG2b4hQeG8utAMbrogzT4uvmKxabRXEsrzQHJfMvNBcrregeKcooU3Q",
  "key18": "28Np8WGNmeVYU77jVKkfRnd7QXbxHxxXGHe2DjusgrsRPH65GypEF5bZ5jf8DLKVEUovPwWYDrtRtAp6naxoB9BZ",
  "key19": "2aG5gbc1SzFoQN7WRiEDTC5kkH2hRVh1inNPc5Q62nGTpSzT9F14mTjf3wZtpZLp4Jm6bmuwua6gCTyuFymofXu4",
  "key20": "42UY1aQKstyCrsP7h21GNMLWXrNJf4GJ9isk18uFrjknCVN5ddo2G25R4c4h2MMW5aih5Tkiy7yRoLRFyK731WRi",
  "key21": "5NhJm5ou9LrE4bp9oT3BycxBRL7vRj5QmEVRko1rNidfswdFQEQdxQs16ZjL6ybfThHEr7HaVdoYcK768sSsePEJ",
  "key22": "3WEHeyM27wxGYk7eUHHjLHA2fY75ZanyGgJ1rQaipJg3B31UBeKNikP1groVJUUKTyKxirctKbYSAKLm5qneDNgh",
  "key23": "5id4uX6TqjVgzg5S55oMwopjDKZWZgDY4T7SQGbaWtiopro2XA1qf3yxJnUuPfgHLJuK58LyuVeyyePDp24w1WYM",
  "key24": "5RvpFa16dnKauXYxa2QF6QW5HpY99Teuj7pETEPXErjSKsLMkawxmqzqnVBfb3g4Mnez6BLnLc9rkHcs3wBHdn77",
  "key25": "4Ntz69Q79wLc2u5KZf2ALi4ErAaetBuEdUWoBdY7ejbLNxortWeB12sQthmrxAywz3k2FiqNGohKcody3Av4dyzS"
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
