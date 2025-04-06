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
    "2EFEpQ8H2jWkbrBoq5Bm5NNmRJtbDTvHjXu7urZfxTrZP4wGj1oCikptDGQBy13xRB2NUdb57ockBoPA3UdNoKx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ocWJ34tzSTdbr2Jw2ihbtpLKEr2jxztHuEHrcSzRvch5MDu43YyKa94ef63PGaS8TcH91rPQcWFv854hnD9JT7T",
  "key1": "44NqhwmfrLXzBmJ1DiJ1C66q5YjWyDCqg7qWLxRGGDJAepTkJYdp1TNon2xSviiu2EBDgTPxuDiSk6deThrkaxbY",
  "key2": "34FDEozSG6hFMVMjZ1nRiC5G8eekwEwsy7ZTcREt1moS1j4NCCGLbVvNvN6kNTpfZMivi6WxdFCR7PHtTf1212Cc",
  "key3": "2tF1LFhsuLZKWcpSyAPpvQjPjnMVTWdWUvNPUhSZBd58SuB8Pe8mKRDMPERAbNhDvKUBh4B4KhzrqqBnB3yHdFRS",
  "key4": "bVNfMVmsHYPwn8FVaypPBuLujcbhg74qhRvK1m9z6QbVbSh4ihKB96LsjFadwrGyy353BxTLpHidt36qwZsCocd",
  "key5": "5hM5ZAhqwMFz8kWmXZbDSHa6TizZuV5bp9yHwvtjrWRGLJNciwWaHFqdrxTrWLuzKGTrUHueC2xgMcTzykF92Amn",
  "key6": "4NxTcSyU3ovPacwVyE27rvWzbmfNUBRp8zz6foU2ufZygWWVpZZfNY4grcbtXETjmu9iBqdncFi1kV3kjUeLLsS2",
  "key7": "JmVYK81sNY2HDpXJxJVymi42n2MJ3b3xhvvPjfkiMuow6u2qd3QDQxr5NLLNroHyVye5kBabspiWm3D82apCCwt",
  "key8": "3oQ4dAMn5QBna1FbgXvVb9QByXguzeEqdBQb7FeqzzZLDLX3s5AHrC1xMDSqoUWBuHD6JwNrHWEHp4oouGGtqGG7",
  "key9": "5DmnS6865Ai97ofLu8XjQ5tBnuRaQEG3HrQLRqXsZpLnNewrJjNknW2tbgAbf1182NzNEDLWyqxeW3VwxrBjGWeT",
  "key10": "47LT31aX1Q7VoxhBhkyzgk7MqpiKBWsjxAhLvGqiFCZxwusd8GiE37NvmNaoSRrK2am3Xstf3m86MWsdqAj5vzx6",
  "key11": "54zFtn2KDzW9CFerDVN6kUDK23xydgj4HXodiBH9LphkkhFeSJACn62xJheupzj8AatELU95vtmnjwFLdjRhu86p",
  "key12": "3yhCPdgk1ZPnXEfVHDc2jy3YNXfX3KWphhiCXyXhbqy3sYRTuzTb4gcN7BEsw8jRXYhfdfHxLi73nRCSRFCY2bJs",
  "key13": "575VnkgAmnADauKrDTuaMLm9DabUbmDiyga2p8KWesFhD73knYgCRH7fyDKHCKVUmvtMtKQU1ArR8LyDGAK7A7uR",
  "key14": "i4oUxsWscyB8vfToF2gAj9KtyTnQN8PFeDCbV8dEC5VCko6XBNEvkQCBUtiZucnFgxZ97WH5wLhtnpWEFetapBj",
  "key15": "1Zz2KtoKLZRWfc2WvqL9gnLzuj97VP6J6wSQSXDy81Hxfik92Sq5HntW1eq3wtvjvyn21EwrjUZK4kRfnafK9e2",
  "key16": "3WUvXfgEnaHvisNZzNw2kvDeCPyJym5m8KML2MtDDNRrA3JoiYNGDaGvxtmEZpJJmenGRVzPXxydbjztoecekucJ",
  "key17": "5eS3shXUitehWx7xx5bfVwPzvYNq7kQnk9o67joDEBMGD18S8LpZvHgpMMEKj5TrUVCEmU1YMoD54uGX9mSt68t8",
  "key18": "4H4Beg8EwUJUvCGMDyQSDRjopjMEeLav1s7toJW79KsAsAHuWygVHcKaWYxNiCtr8fekNWU9nTwmaVKnE7HL4k6f",
  "key19": "3awaN1KafBUTqbyfY75dWXxrSnvVHgdiBZpFHCuAd1QHJSxMWaJrfAm2qdekFXmiAeU3F6voX1uEfnLYqGiFFo9c",
  "key20": "2c1gW12b6iQ1fDX1pxyMgmHyqU6YZgWGnxNGj5N3zRtZYAtNXy4DJZgo2ZeVjwW6icDuvArizMhgQ3HYwWejpp8C",
  "key21": "432sjLh2xCiXYreCQHsbBbAShBQ1wKjr42TuETrjVfFLUEmgAmdLQdCisFPCQHAacpjuSWjCmVmQM2dCAsBKu2FL",
  "key22": "5nEZEgo8jjoTpD7r2uJDJeJ42x4jmr9AFS8TccmzyLEPLdh7AgyfsfiegpbArs5p85jY8W6Wutb3xSE3fU5xxej",
  "key23": "3ACcuuKiRRzww12VtKFLDiRU7yZSFzC5n5iEchcEBSepNMmg8gbjam8QHsCi4F3qPM1xxYfBxJA1pdwiSEfu9CHR",
  "key24": "2EbpYq3f3EPfiqkwSUTe9U5CgaRdhrApcBbAJ1gPpWbfjc5HVyeGzAKpyBtBNNGRmeqdyuNvEzBFydy4yQ3NgPRC",
  "key25": "5X5KzMifVikEKyhNU8Uwoe7YiuU55t8GcZQpspL6ipqiDTXZdKM8kESNbZ9FiVQsgKsR8gofNt3KNVSUEtAwGhxC",
  "key26": "5uVWbaNTMBjGqYh4wunTfbKCMVr5JEy4GkXhYQbYXCJLHKY8oiZwbPZMwsTFKy2KtH6hz5RN9uKTf65bEy97tvjp",
  "key27": "3NW6WgZTeEUqi8EuKy2JYQwwkHZQBTDspwatfg4BiD99gNMyaHy98C7dwZRwHvVcdyfyZJPPhifhsVofEhmqpNFg",
  "key28": "t84hpx8kzfJcCnwaS8LmhiVzKVmb5STqqbfjsCizkmCnQhDQvyxZxsfUCs1WnZtUNahECgAuKmfuW4xP36vCsxC"
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
