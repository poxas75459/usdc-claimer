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
    "2JGMmJDzGqfrmHDChG4HZded311aFiTXTb5nR3v8bBNUkVtEu647DtkU5u1uRQxxyvALpcSZ4tARmC3opzP8FiKZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2erTBvMdgdPF7U3YSWjfRqyFq4GEef6jNu6BoBsJ3nZ4jzzZYapkLiz6HnSsDH37fb2gBEhZKJD6XkkrCD4GeYo3",
  "key1": "4dBDet7eGUWyLeU5EHEzBREap3ABG5ZjzMEGCpMaiPMqPWDNAkiodYHuaRdWt3GCfiCxvhuDSxHrXyamiMexEz5X",
  "key2": "2FtEnoA39nsEK4tdBVmLYi6X1uvLW3q6k243whsvifZRAc6rjKVSo34LsATi5GiqRwHEgLTmtvNqQZU1MyQZYiGU",
  "key3": "4k2xuR6yFzyS89M14xppMRCV7tvhQHLouQQp6aynyJZsmZqryVrF2wnKTgDaMAArjQdNcuuAFz3oFHP6ju3xodaL",
  "key4": "4tDFyLRnPxfyy2Fjtw2QjBawZN9qAdGpJ7xrGmyDzm991FWNCBTJRAe1EwwyvcX43NSAvqmQscRRqV2aoGvbv4VD",
  "key5": "36guuXZyJmgPnKzzgg6y9wDNHEApkhXsFWwH6ueGnTyiTgF26YLzEewKmSYwJ4TexM8VpbL8wBHQWLPBAk9LLmvB",
  "key6": "2pFmiZpVWJadTAFqFVScLST2KrAKRmu9iKduLCYsZh1PQmR6bZo4uogTN7r8TYtNva6ninzUo6QRjXfNSFHhvR2s",
  "key7": "5MAdWDh6j3kzGa1XXCib2aNQhBHMRfsqiQsSSK3NxuAyc8P8dBnNZfKCDvhFWNiUmoMtLkyX4UTPWumbfr1h42Zu",
  "key8": "4kJf7Kqn52XAc6h9HeeGo2LXuWtAja8jKi5CJ8koyJQdVwLptyR5nTfir3HTm4sCUU7dQQNXvN8HoeokEuce3S94",
  "key9": "4XJySXUeSgjyyHSGRLUemXjHoGyQYWv2mabAsHQEFtSHF3i3Ef8Nct8ms7RNqUpTpXYs4s4Zracby62uAr5z9YYS",
  "key10": "Np5vDnz7HLqUKGvxdQb7XbPv6MshNEH8kRjudTQm2Cbwr7eQFFHjzCsCcdUV5xrBVcsiC5Eh6JKyHfePLNn8cCp",
  "key11": "5wY7Aa1HKarvWr9AAG8Eut8de4eJ5bpCmDBYPaDpbXKC5FfVRBbWH1h6TMcwfZk22AMXfiSMSSXh7MspiMLtY9Bk",
  "key12": "2Mq1AXeVM77fDCpsMUjSEoAbxAXKmePtoBLZ3Tw2wtsvT5pdZMdCFxzawSayLx4S4BEr9XETcHAcoTMX6CfZSKHj",
  "key13": "QpYpvvZBFooUTwAHw7Mfk3UR3VQZzf3JG4u4kgaY6NakcNgmeJ494iC7s98PLfJoSdjQTctm1axW5jXd15P93ew",
  "key14": "4HDk9te99iA3YHS7Hgda4f3gjTQN75dCDzKXhgemBU9F7EZxyhbgkPtnFJMgfc9ZytgAAg2rGPC6QN6sfK7dC3EB",
  "key15": "4NTJFfKYtVqAo3hJDsp1U3z3yn3ARB8Cr3BfgSqDLiRLUpkRMMGP2qkG9T4cCYA48P6sZ1j92xFL3j3EPaxLdA89",
  "key16": "2RFNcY5Ts3YxYE6VNtBdhmVdxQVczVcAx9PN6Ukxp7uns12YaVZHpSaBbCEEiUE9CFjvF3f6QUNFFBfp3FtsUokC",
  "key17": "2THC8Waph9Nw579qHf2TLaT7p17ef5dTLnkabvVbCdvqbS2JdS16fxiQVoWUTGLYKjjwEheNKApb2Yw18AnJzEVv",
  "key18": "3yr1Y9jgTWiKQ1L1xVqKsHufGDBHsb3PmWx3NrerpFDVc6ZBh25JYapAN7f1g6qZ7Ni6Hk8noa912PSiHnhbG62j",
  "key19": "2xxBuH893CPkJp4Qa372EiyY3HGAAxeJ2SeuNhZ8kxE87XjRmiyyC6jLxZb594nvSM7FTLKorUEk88rzthLwkQK2",
  "key20": "4Jd46RHCcXPBSStgKM7d23x4bye444nTc8XYbEA5Bg4wQMiEBh36m734HG6SHXPDrxaiGsJKBitmKd7JoUZX1ub8",
  "key21": "7oQFcFHSa3EmU2g6L7MdnrMQ2LC9jwMx4mcgrFQcTnymRQWVCNQs4EVPHnrY2L3v4Eiak344Y9Fmp1PoGP6v9Z1",
  "key22": "2MAW5hfStXB952os6bX6veqXfA6JDWsiwK6554NBo5Bjh9ENHgjLjMAQyW2KaHMqPdPDT3uYmTP2j4Z9rZg2Tmow",
  "key23": "5qqmi3LoPLM3Z5u9z6AdsmkeGosUU67wow17k4pCrmNGd6m1gZnMjBkUx4B6X9M6r2SNhaoxrKRRA4qud6vL9J3n",
  "key24": "5v5FVAR7yzEYRyGZ7fXastFZDji12gP8uL7McuPj4evJgqfcBuJGZugwRpXNXBuSooSUE4pZtgJaqnYUWVVLj6mz"
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
