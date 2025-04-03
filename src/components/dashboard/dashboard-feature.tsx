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
    "5rEu1a1BfUXgVDtmxmaFAdG85BtnDAamw6Um9kH2aR4QF3iasvGeBUdTJeGjKbGE35Jn3sA7KxAiuNBHbT7FyvAQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vHXBgANtCkP1kMdxjXyXaShvuvoyp1KWsKAUa1zpcxJERD4FBSiuEgrBszMCaZy66azf9mJP9weuYHdzYFLrzHp",
  "key1": "3MLm7GZffji2waEckdGnJ66B5fwckKhJX6SKncsD8fw1YFfXXyjU8kmtG6zSP3gtsHwtF8Qzyxte98eDx7dr4omc",
  "key2": "bdJvi4br9MpCdBin73r33bKNgSfnN8chxGV5Hr16b95DabfxQ88BSvBWPNo7CD1yzphP2zFsc7xfJGk3ozeAvLE",
  "key3": "w2ZD3q2yLbN6NvYE32mCya6LzHTdwvzHUjuC2LmGUtfAvAk2MihRJp1fi5txcfXyFeWzhykHXwVDVLV9m6ZBJFA",
  "key4": "47rborUMkPtrY2Wyxj1Ltt8qktEPPiy4j9CKEhQjYb84sF362PHmtEyRd4dGePxnxYXcwGc1LuUnYVz8psP8S96i",
  "key5": "5DuWpnPrBXQErbe3nVcTMEe6RhdeWwxrW9Ni3A48xEzLZDa4arVBypALK7Lq1EWyQyjsxmfZPpvem2uuqNJyZZG",
  "key6": "5XnNkFwq7jaEN3uZYdXP9jgzjWznJ5b7NxZsV52WMGcHshQquKaHHKS2Hsx2tFGVwjnMa6jkd4m8Qpi2iUESKiES",
  "key7": "bd8HZWPmyxp3Wg3yE8iTRhTEvPgePzz64ZmADq3FunzogjB57252FpADKi5Yu52S91AwefWuJzMqbpXAAhu3w7r",
  "key8": "4Kvh13Tgd4BhDk9JMpTfoiMgRF3suQYGgfWu8GGg3oAwUGaUuAQMQR8atV9p844qLZ29nSxg3divCUYxkGsGddNU",
  "key9": "4FQzofpNecEvwvnGDA39ZxH7wQsGReUDT4AfbT8bWajpbWohXeAEzPof7SvwmxfaeDhM3E237vAqKWq1NSmEeysZ",
  "key10": "5Sr4SFPLQvWX1SF1vQ8XwWjruHDDzPbm5V5SgueW7sz8aJyXbtoebrMWi5aFUfZEY6YtiP6yrdCnQPqs5Rqtmh98",
  "key11": "5fH7DtsCD3ge2Jn5veeGJyEGj4dztQk1eLKzLEdKb7pzskTnHDT4vRzFXVR1Ro1MpfC3uPundTchYfuwzqixWH98",
  "key12": "2n6Eqbbmg2t2Myy9CvQ5rJ2EKDcXzNJzRWp2qm6WvMp4wcVHij9FvWtXpHw7oWaK7g2uwMFgzXgNH1ZSM49Xr7ea",
  "key13": "3aBjQ7XqAh3qjcNvuhNJkeveLVV4PaZf5R9m5uV6RpDxzyoEJ8GH5drjyMzTLwzxxu1H9Kvbqyfr2UJFmcihqsea",
  "key14": "3GahBDKGAr5EAcmrgPxb3RA3Br2UoBtiz73BgodEkYSpdr6mJjoWrJXuXcLB7cPhHtkFoeMnvTywmJinUXXmJXxe",
  "key15": "3vKFh4K45Mpby1rNLASuJbf4psEsGPn2J3aD48e1PdxZ1JQpKtCR7UxXoDdo7aqoTiwoQgXyHxJ7oPVAbAtkzuVx",
  "key16": "5pfzZgGhpFTVuatRngSDj6FHtEiGDSmawwfdqZiGi9uTGUJW95G369AzuNqHdSpwHoYbcQdeuMUasL79E3KNxkE8",
  "key17": "5bL2sA7UbwaK9CLrtsqMVLwzdtsuXq3X9mAnXQJra18pjUmLYpKCz8zznwZXgUYVKcMoGsbX2NY3Wn3ytHuoLEj1",
  "key18": "4qigjpjLtqoxLCKoZMXHaRu2DkPPq4dUcMi7KF4AL2gUxV8QGjcuHN5n8LhG4UvGz2D3hSFCfYtTFAFq6k6Qs9XR",
  "key19": "5YYek2ahqR1UxyMhqt9SFKugrXUwRiADWcYpegUxoRhwoWZRC9ZXkQDBky6YzR8AFre7dcDfiMHcv4wiCrSf39vt",
  "key20": "3DddqQhLpgML3nnT4MMu5jPpbyVHFW224uDKX7uJz3zQbo5BPg36ThhMLf5adDL52cWsLCUC73KPGndwQVcLPcvp",
  "key21": "5VkEB92rHqJZXZ7ZXWsn61haD326E8iDE8ZbpnyYkTWMS3vYiWq52joJxmJenR1wDRQz9sN7imHitjz7zYJ7onMD",
  "key22": "3pE6Z6avGs5ydWwszSpdmYm5rdK3iqVyySSzAMtiJEUf9tBoj2fxTioEQk55QqxkGQLsmrLiPVz3yeyUimUfa2XV",
  "key23": "64cEYNQb69m2jdn9oQCLivdwRDPFG2z74PTN9JCvXmWYi1tRrXb4Jh59VYqSggJkDSxB91ZpfVz4916R5xpqB7bN",
  "key24": "4874EmQir8cagL1JGnbbiDuRdVEijbk991gNjpyLDmGhrzi61DZKGc8xHXUjaayNbKjz7etGnnMpRzF8NBZCixeK",
  "key25": "EZCqRX95HWrqEkRZZVxPYMu7L66943Y8ZyB1KwTo43NoaeNDgQ8BYrDGFG3sgjTss8SKnXYvJ8gze6uqb2x9now",
  "key26": "58bqHKoeeHeuyrHSt5sKsbfJHuryu2D9LDTqhkv1DpE54wZv3E68Rszoceb6NuSqc6AewCjgSiHUFzbC4VeiqvDq",
  "key27": "52j11f81PTVvGVTxc1BtoCKfzpD2dXvYyQ6nA4gXX1ztpWR8GoLtXAyLQk8ZErxrSbeb1Db1PgXpj3pBtToFZpBn",
  "key28": "4rLKraumAbtHpAAnC5pe3kgK4758MpbfL85fsqiycXCnDvc9TGGZW5j5ZabQq3J5nPb77brFPD6TSmZJ9agRCtnT",
  "key29": "5hKYj9LQBGQEYd4sspacNbWaURwuM2LZkxgx7dC3c8YE3ATFFNG2y9zx7vewyLELWsN1xm4y89r69mEiSD7W7ACN",
  "key30": "31MMvf9oq5L15mkanwNds6u78PXqi3799LxWGi2bJjBkGFE3qUAyCrkCYAfL8bCWMaQvLjCZdKNa2Z2FkW62RkMv",
  "key31": "4gT8gjnTjzYC6b4sLmakCbVrMrh4nn6ptcGMaUsBiJWkqdnzWe5cACHUXppcEbgnXbj2gY84KACeLLxvn6rmMc2q",
  "key32": "2LpGDKVz5m5P9JWeJKRe4qHuwCXdQxkQdjHpq8haapQedi6dfdQdbRt7NQ4RWEsLz4zWKN3uLCfLkqB488BdaWpr"
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
