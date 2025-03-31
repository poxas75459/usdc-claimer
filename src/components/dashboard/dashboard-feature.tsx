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
    "5VcEyH8jfB42UBCwkn6DGYjpef4gH61frWpbweRgpsWYEjWWa5qXsu4GGy7XoKf1BzVJLFwSthH8JcsNqW4DepRE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2uDhm23SbUWhCeV3kv7AMgdhLG8z3PiVhfdoqu9JN7vJFGxQHLMAbrM9qqjNNPDToGsu7eAhvWa5E3PLbHUFyCQR",
  "key1": "4NLYhcxWKMkBazuoKKrKbjmFxWxqrJLXdboLjcfFjgUdZGf73A2HgvUzVmutHqo74zfKLLwDSqnn8WHoRqsBXzQk",
  "key2": "5S72F6rL1boBZpVXu4Lh7bFiu52ch4kQ7azzQYkSLnEdPh2C7s7dWq3jRqTTuUjuJNmFcUa1CdZx2GRSUYByVpo",
  "key3": "4ScBQjBcfroLd6yzzhTq3VahAGEh7k8qSnBZWWaGfy8wfctGJAyNnz62HdSzd29ucMAtbJ5KZTZLF4uQWeNjpTXW",
  "key4": "2ZQWYSU9mKT5gNBstFLqkwAaZrbu5VM9b5UiHkjmWWgJvTaewC8Ld3BJ3YWRHs3RSa7o3aHbm6rcVtYHdkg5i8Gd",
  "key5": "5HMFTmfqUKatYov6VGr3CUoNFYzji9b2t3ajwZuFazdQgN9t1mJror3TfBLe3CtBBPPY7LZkMjHamMYymU51qiPS",
  "key6": "4XJQHhrhgBBSKmqMDtefrNazF3m5pNoZGTuC3K5faXJ6oeSvXsgoELgEnpVMxRc7ucRTRBQn5MGSFNFrKbKEZQu6",
  "key7": "3qM4mrSwAzvLFmDG9QZREyBbBgqnY7h9hFnxFxqjL9tZwk8iV4JBa1t3q6JpZkF1z4cJuosADkUQqFPRNft2V9oa",
  "key8": "3N5irVNbgKQzKEqAm7fo5YkxvRvUWk7jAzqcP2YmtgbUx7bReQG9EtqUYM4WAEgbyFuWEHDJFk4XZXzKcm36jVeo",
  "key9": "yTs9NwV4TBg23wXyENjXyTVpt5yNhfUQLSgxD5bBMv5mZURXEpG4yzUFDwMmxNrJNX4URwzVKJ5YpMM6xni4QtS",
  "key10": "5xGNwwRPuBS7AQB6WWDWgD4GfyXAjNXeLtFTUZumrHy8SxzK8NvADzDGBvoG2ChY8oB1UWAoD42d6Tai3q7vUvFT",
  "key11": "5VKQzw3poykUj3Gv32uJWpqJkByEKNc43EBzw8VEBGc4BCSLPu2TFge147p4pfoP8MXGYVw1K9uq3tA2C9FSRBjx",
  "key12": "2C4MwMXUq5QC8b6QXBahY7whTLKwD26kVJHLgCYcK4ohH9PHKBr7vEBzBe2Pbqa7aWBSrh6NeZ3zZuQoBLbD3Ufm",
  "key13": "4SazwJ1e4Ce3zwmhFwtgBo9GS7bmJPic6pSVoAeZaWNkRaAqbzp4wG8mkJo4D9zTFPFT9SRGbiQmgX5psGc2dSq4",
  "key14": "ik6oHXzjCvDQJY2vHgsiePtQDTgj74yWhzGhECuf9NeQBUQyAYcBjAT7i6MsMoTWUqCfvEUijsd7HZJE7GtCKQP",
  "key15": "4CfEPjWZTCC3fDZh3VpsPDsZFk3oq8bJCazvH3GjvV8S25q9UxkThbVb6gnPPXsFCLqqqkjpw33qVYTSaWV1LM6w",
  "key16": "hJHErVS5YztDTFS3e6YYy9vjWXXcEyHsD5XSCtPex4s4mCJUv1aC75Y8NgtSHpLvCabknYdmLs5emCWZ35Ne8Tg",
  "key17": "2pGuTjqDs2DgtRXQQLEEDR4p2uk2Zt1L3X2Ffd7YLvED8GugrcvmAeA45vn6DPYm7isPtTpWBGVSKCYDpVdZnoJR",
  "key18": "d2b2BSF5Br5hrfRQcMnr4zLEzQiKNBb1B3JpDwY23pQXxRdykgCovViXMKa3BGQ6kLyLU8wNpNyqSZhDLSjfj94",
  "key19": "5oWaUhewA34UvXjt2VRSEZXYmZhPEQhPKinQmeHqpbf4cZ7NykbnuaYavkKLuYwr8stzuFeV8CtxHvCoVxHv4cwT",
  "key20": "HcufoDz5arrA1U1M5BMTmUhk9dg3eWkeRrewrKhq9za4j2ZtEkx3nR2S3UJNxuYBEEceiz3KWG7V6H98MsTKWyh",
  "key21": "3r1PeGr1GfZeWYj6wU6i5RmEPaZhipiLRMiG6WAq5ZmKB6EQ3vXH6hBJk3CCm9iLtcNo5f6yRT9nxE9YTWTTzFz7",
  "key22": "pmf4yJE6YPetJwCmJ2GjZywBVGRuKnkLT5B2PgDm4KVhisweW1Mk3pXACbouRoVhY7ww3TBD8uCE1rvYiZeb1YD",
  "key23": "NiaRVAJpGaxGPkxUxtz7KndY3m7BMemYqMAeczMQqHqGTMZUjbWitMHxvPi7hqFzuKyCs9SyXZrUKpP3RkH8qks",
  "key24": "3xepcttjZUnotGLZAwBqRMPeJ5GMCAvLUoGNBd5FFW2GKyHZz3fYCSCMVeZREUW6Z4LnxR6Tp5j2dzEoiEoQks1f",
  "key25": "uH4JjekSbjKPpo4B1cYqK6wcf7fwysvXaUoyUZB6fX2ymsTHyUmWwgEZRuUsC66sbGxa4yHCh9A6daiuer6nMbg",
  "key26": "L4SP3e9QwFa6VR9FbZhkRudxrZ3pGcUYCna8ENTyUarKHbMDXfv8B1PTxvtDwpa3fLEaB4oPT1s7d1zXADd1kUf",
  "key27": "5bTBbPUTaX1nSr9z3znBi8eVVFD9mQFES1PpWrTnDdSykuZ81RA4gHgnpcYzztE7LRVdNAZen3ZXShyXxRdP3DEZ"
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
