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
    "4BaX8HNHkFGT9uztajCxqc16dt6kskDEkTeVWzfhNcgGDvPBWnt2yJzBMRiJhgtbeh2B28EikHLfKWTkRoT2MwvV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GxzRS19VCGPAiw6AhL8xou3pqMHhB22tAjQEeJHuZLQotakAbUCztEWQnvyQ172b1YxeyjnbzFANSxi3wacksdo",
  "key1": "3PjKzKJxEK7aGSsTjkqFnHuQyqXvFFj4TBExDHxH1WwE47VdYLakxoHDp7iJuhwMo2uEu3ZD58ddjNfASif1JNwz",
  "key2": "4ejXt41mNCNdxK38crNZWZxtPuw6i9Pmin1HQAUePDsNBkRYFGExukbgsPDvM7j6W7MQDEqjZeq8RZin9xaGMLCN",
  "key3": "29FxoVaN3sTFj2KGAc2mnj3mbzxySFsARVC7LPZHhm4sqEwigwcb6CCb7MYLP3F9fNfEAq12hArv6WmNHnuJmo9a",
  "key4": "2oyCAsEScCUKJ4dXhBhG8DrFPTYwWK7Vb187vKWKVpZUpFhqM981zrbn1yJg6sGbC1U8q2KWagCbgfTS9FTZJanW",
  "key5": "3FcqJuysRgoB3zRX262TBfqddydTfKd527kfALZPru6FHUuQzG414t4ntbh9hb1HhVtVutVF2X1Xs8icLGy7Ds6p",
  "key6": "4kxtNmjAnR92z92VzZcgdxf8eSBX1J8WX5BiXpvR9XQMT3LwNuRXjvBRnJnL4AsCdK1667P9d1f63WBeRWAG9eq",
  "key7": "3bB6g8dhQ478cvT85gXhaPEtH8Me3PCzSeb3gmSXMEcXkB3BhzBmZ9a3hQKvXfueojfyPdUSUbKSb8F6tLZLvUQr",
  "key8": "h7nbhcCug7WzduRvVndRM1RxHi3RRA8Sn4UkpoHdNFtH8r2ri8U1ZX7jTw1BHCTYCNyr9bKy65iBFBz14ZcGwQn",
  "key9": "36rqHaM98rHQJ54gH3QWTxqQ27k3MRs2UcsApR3pD6BTrjrDCzixV2vDHVczQpHVWCdubQi158iEKiATq4ZyHEnK",
  "key10": "2byTDrm6AcypJ68xdKCWBNCgcUixsjhw3CmSsxpCSaoLYYhRqmApx38JkHHN7zdezaAqEygAgL1oMw6baieoAcrn",
  "key11": "493TnSmkzb336KSSgWJhuxZj1xGDpazj1WFAhT4WcEE4EKqL8xtvGT11VyuCbzocAKbA9myLB6XYBtHnrFJCtEAW",
  "key12": "4sFZ1BiU4uo7UDGjefGrYMEhmveX8bYq4oZrHFUn9MVNEUmVneLQL4tu2WyxrDiNyt11hk3FvG24wxCc9k4Ri37T",
  "key13": "3sajh2Uxj8Fsy3oVnAbMBJpCL2SUPRWYBQ7eANjMRYgb8KpqoRZtERXXmxXEdnEG9PgC8A3FgnD7UFLh6JLRZwYZ",
  "key14": "4EyjehdR3WYSUCt4tp7phVwqrNFbSJmBM8Lb7xbAPVLWLik55p68ZTsP84iK6f4CbqkuWh48PzQnzZrcJr3aXKA1",
  "key15": "5ffhyqUpzhA5rvdcWB7JrdbbT7RHsbDsNMg4jZ45UyNU8G7kM7MuoqHYfm8ytq8CkjNrgkgNSfVU2Yio2WgrMBeb",
  "key16": "5xAyXDbpa2QeM7iEBhrEdwyorj6dAD3CgRM4ysEspbwHGfW2mwqjW9kgX23f7Ek3er7c3tN1rmoJLha76WpqsyL2",
  "key17": "46kHTst1f4K8rsjUxXfYnombgzzWg9os6CouiRsg6qWzJNrXytT4QewxuvccGeiKjgEtc7ocUvvKDuEXwidroend",
  "key18": "2gJbYohwu98JepNqFzHUf4TBo2RhJsxYN9VtQdXePVWKX3VCZzUihkQtr7PtJnpGxhXmkYqbgUjPA8PWYVrJ37xK",
  "key19": "tX5avv3Ldpjf1PHyFx4zRuzzzyDaSGMkrnQ9r2h38mT2JYF8t4MxV8ZpAezx3X1mSWrzs5KSJGgefQbEuGEopgQ",
  "key20": "4x5fmgV5vy7YW8fKBxNLSy4UdY2uRhY7Hj66WtrQkNKRX92q6NjRBVmo27Xo9y4g4tSLMRazcC9c9NMPo8j8bBqu",
  "key21": "1aD8F4SbfH5FNZHWKm69n4dn9xf4TFkGCtvnMKVsJnNSAfbPqMDPfKc12TLidhwxbVDRNREMgCQcuieb5hJckBK",
  "key22": "4B1hknU3CUfvMMraiZkWeuNzhhDJhYXE3ux6AmeD8GbuuRTTkjmZXfSnMxFfzXe6xeYh2RGj4KHrvwi6iueUpA1P",
  "key23": "a8erU13NiepCTYfMo8LroQEogQKSaCkGJjThXRbkjVPRsdQPSkmAE5LsUQTWnQSTcoraDj1fGjZdgujbCEMX1tv",
  "key24": "2ktaiKUHN9CJ8tRStRBfsmHLPfQR9i9hJo9tkiiL2GkE4FNCsXDsqhiKLQwEqp5BpStoiiVp517eBnuxWi5fhXf",
  "key25": "5XcuEw3nWtKsnjCCYMrZ1hMxTPXwYGsgwkgoxetTWajCtuiVnviQyYkz2CNa6hJArdm3owk7NKseC6JL5x7tbyKN",
  "key26": "5AuXBME4GzG7qcrtvxLEueU3n54SAPJcSm5iGPVWgZ4Kc6iajCCy9HQqgxv43Asdi1aoWLBMpoEJ6vn8KcHuAhTw",
  "key27": "2pq6V7XiYvhtuKtJyZg5odkbHUQ3SsK4dtT5BLVakzj2vkZ4vMxR2FJvXfWuhNkswTvR62RBA5qSo5GU4BfC6zax",
  "key28": "5cy3VeR9wrmZ53zW73fpiqvCn8y1ESRHegiqVqyJp1vpcJXbVn9znqDbgBRXs16sTTm6PHxLtpXwuqPiMAbX1vLF",
  "key29": "4qX29oBHVcfX9p5unNkWriFe8N698V7rJL3isqoymRHnxfv5h4jo9E8hHvMBjjNdEp3gLTubjwfdSVnArezeB53s",
  "key30": "5VEhNupkickAfASyKaLD9xxgxy4J1eNGg86JeiDHi6fa4j3dhwxgFoA7X6fjsZj7ieR3RpQ7SvYhhwhYSiyLmb9Q",
  "key31": "29CzBHvUoFDRxX7rdjBY1DSyhja4K6EuNRLqgRvwLYZC7sTdUdkC5utbPfed2JGxkHiBairJ2cpQSAio9L3LMCFN",
  "key32": "a3mG8oWBJ3hceeFUCuDQy73s3Hv9hUnyV7kzGZWNyzZgroV66XSYVBKS3oDvtszWZ4hBGq8TAv4w9WibbomAvsA",
  "key33": "3frPvASFahzi54EtLiLcM6Ekwfwkmgzx6ApUCkJTrBHTE8fJbcKT4xGHHGt5Ujb7JbBDyyTpr3NXfXGv3XgKf7Up",
  "key34": "3qnx6H1BYqh8z4mTJKAzYTzi8AFg8RLewo5Ybj2qRn4xnwrYSVdx7Y8mu9JBJtjSBT5ByPjCnE9tkbF5UdkcQev4"
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
