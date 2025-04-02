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
    "4t9pHc98b6dhabh8baWJp3bJHfTmFe5MWEwbDS1Ch2nMxwfyoYCGWKNxwmTwCgjx7PabxicWtDR2WxbrdtuK2fPy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yoeb8o6iYQf13tGnDEsTJMHK8CeWcWzc2r2YLeKeQYa2igUuoKLiMxJFQuQtuQiMyvi5KdyoofNjPfWaUAsGoUg",
  "key1": "3wdHJsTyDDYJKaz14XwK3ko1bQcFuhCE1Y3DKdoQvvn3Rj7ByEKFerLTRmWkmAoUdd55KH7gmDxL5oFiM7WbmnAD",
  "key2": "bY2Tzky2iW3Uv8Ax9ttc1Wx6GXi968WnXWPfKd3zpea5Pu9H3JZeVp4ij3jLh2Je2rHaL2rzF64U6cmWsxfmrNY",
  "key3": "4JyXFqF1wf4ypGJFDZ8eNW7vJNyfjNxxaRCjKML8Nbf5DgDynEVbnyZL1EvYVmwAntQ2oLmT6KhtE5oFdCir1ifv",
  "key4": "38zHBx9aN8YcVroyFfc6yMzauyf45U5JtDVBucbX5L6FkmdNjgVtrUdJKzP4uR6SrpdS4PgdKhh2qKxJ9XAMMaUL",
  "key5": "45HPY4gMaF8jL9oEhhevMxA1VmW6KXjYNct2rQSgYAuFwgAxFH79GycLepKW5hbwgAcSKSUHGJok7YAvxegJTuFf",
  "key6": "45kmbnsxW6vXw6ZRunaLuwotA7XKUk8n8uvSsPSiPmQTZBApzinZJSvXcLz6tnwcdESmwrBakQyDpFFbWPJxCVAt",
  "key7": "4AiViCNQZpyWZ96BzSV3n1zr5kX5sK5rDExEXyDgHzV1T4c5aT3JTv4xjiPsRupCgGcYAM3fDLsZu7eMYUJLBw7c",
  "key8": "4kDfPGgGHRuHJUgjqmu2momUT7114voofMKcNXGP3uLEHrUWPoAUVdVz96kJKWKk2AL5snDbtiSU5LQMSAyyyjB7",
  "key9": "64N6ASRvPcTX8WWHjDorboanaG9qCkdBdCoZ1fepPwV24XSnLX4G1uh4EFjkLuyxhTF2yrxqkBgPorKRCzRkg9zc",
  "key10": "2XbBnLudwmX8RLpYDVCfKt75v4TLQ66kWh7Q1Wto1DW7Vckag8DPFD1V5U1qbJkzWyYFvEQMKDxE2nDpAzJFvUQm",
  "key11": "2RVkNpnK78yzF9T8EvfY73mmrwRFdkEDKWMvPRC7jdXwJzLfrw13JmZ5fHf2LMbUVcF64zRhx6zCvYGDHirZRgHM",
  "key12": "4iBuRcFZHrTQh7WuKZNftisbBb9TpXT2SU8TDY1nEmBiewVPrCB91kY29wJiZYZ2vrvv3qcZVRLaWejTJLNmUB9C",
  "key13": "ut5xLyKHZVmygDcJvCJhJgs2KD9e41Zk4TZRtDoMjRxkV76pPi6BCZ5jAHRyVodd2h3wn8LNQPmoHtJMo4saKJh",
  "key14": "AkkyuQiVwbDJAWAfem6N5Awn7Q2JKYEgx67vKKQe1G2DWLf5kxrp1PWPs2hQwdxobcirr2hm1KaSZWC13vGKhvk",
  "key15": "5WNFFo45x3H7Tr1XjsxEEbS9567b6T51RYMPC3tUmKojfXw48KnhgMcrexthVigxbYjzn7Fs9yt85f3NefShvDGs",
  "key16": "tgx1asZG3Z1qaJxeDafs6FCHHfuiDxgEvj8rXru9vZGCsqJBj356pD4RLCorkFm3DCQa818it1TNMgzgDJ6EEXm",
  "key17": "5enUUhSbJEGiYwhFuh34sC47vMTLeFsKVhVyUGor6cPVBrcRpHyw3tbFCWaWUrdwS9YBNvYjbNUsJT9iE8tUhE9G",
  "key18": "56gQ6EXPxqPXGCz8JbFeNRkC1Nf8Drf2VFjHx58yuoSVYm2WYbz2SAmf27BX2UJQvFg3nYxaywZhva9yYsqFPxXN",
  "key19": "2yYWQPJQN7dodUonYe2QJGqoYJCoqKEfirK7pes4hw5HmUbGAZQ5MnzPv8XCXnfHDHhu3WH6putwu88BFxhKPGGX",
  "key20": "3PVGSUNvuafpNdeTtEgBLBrqWznVZYmk6ArLbycgMahWw9i54H1o7RiRono3SknZkmegNjtiBL9KFRZn72AQMCpt",
  "key21": "3txvm7uesn4VHcbkcLERxYnMGWaqASZNt3Yi412YaLRkYve7Tu4NRt86QRe2HbP9J7QrZbQc859L7jUoXSr56z1v",
  "key22": "ATKL8yMyyhj1r3U1Ks6LFL9APUcj5QcviZNCzaEQMKpG3hSKBRAA4A6L98NbKHppMbpX2XNtv7JqquQMHYNCyPC",
  "key23": "4ySsicTgsFKZMhfjzgpaCbPaSewWJwZ1Ah96kdLQ3cdeWYTMrx2ZduykEsBz3vJNiFckXxFdCebNUo6f4s9Aba69",
  "key24": "39gJQRKW5QG59MQ5AT6JqCFvvgHhcJvgVHRiQysYuk7QrQW8RuZTNp9WAfYFV2MBkXXChM2JHo1mQ4SeD9b8xUgG",
  "key25": "2uQkL12u4JfEX7o22TtvCttugzgqgPHum8HQqvZtFKu2kd1vGxr9FXRowhKECY6FK3Nft8b1tRSGFgn166zdmszQ",
  "key26": "4WP9ZkBLAxCKiYGE3MTeCWcXHpjChoUiMYRG67zA6AnRXaUQAQXDBks51Va5Q5U8sSZkJf6Di68z4vzR5mM2ddpL",
  "key27": "4uQBEJbqwztQJXufEJrExc3qB8FbddDLBtEfJcRUfE6F1ryLzhTyGYyq5a2Yck1nJ9fU6Uo14ynU5BDfBimTh6ss",
  "key28": "ErNp5e3XzPYMT5GcFM7nJDRRFMbTenFg5jFLXaBU8ndDfH7Csx39gVFo95ZGM3kKMnPwvHVjt4JgZJpvt1f65mT",
  "key29": "3hAtZ2GedVXLdp9zuiPrxfZuanzJpQDgQgSbHDPhF8Hh8nFNXDnoLd4rxdA8YDHzzZMYJHeHNqJGnXDc9VfSmGnP",
  "key30": "47t7QKkgozQ2jniTz6vhgAEDC2B4BYPhseaxaeN2RBymHsSxkEE27MvZvh7XQLXgx88oQqNqFpKUpBnXm1mzttpm",
  "key31": "252uV5HXXr5NgSHq69kAwv7pUMS3XKULDWaW9FyGhiPxu74EfQfZaNCTVPrYiu6dBuxyLXdcY8mUFyHxUNKbtu2S",
  "key32": "5eHCukU59ETfeaQPQNJGC6PrCv4nioZz2YVdnPcbHez7NuXki8rdszuYDoQWh2hW3xsh4Y4arw4uNFNyUHQuLFRr"
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
