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
    "4t7LZZQBK49JCgfWpwRJqwnuz2FqQpGTgfPup63Gr5Cm32ZbzhM53Sc2R1uh88x3bTgk1oXiYHHKPVGNBGwMkezB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GPhBpyQNg49raS1z7NG5neyAMroApWe2hvFnKEPMYVxKAHf22ZPo7gDoFzK1ciuJ2PGXmomwz9BeRpcDSe8Q6TM",
  "key1": "4rH9W5n2NcVBBudF5ikgmtro5J6TLoxvchKcj9EKcUKTE2nBZzf2MCaLffbzr7iteshFSqurh6XrgvpDJRyDSkfc",
  "key2": "48nppFkrDvUjYTFHVut2jGZhiEjNc6BeCDw97T3cPC2NDye5ueG84KgNMWyt1ope4zvon8zsP8WCk3Hfr9ZAfWhh",
  "key3": "Xf4XL9QXLbF5NGtrQ14tfdCQ5Fd62RpeyoT2CgdsaLpg8vSXjt3uyMhNKdctXMnuHKBXniu7GhiC3furKfwLpCM",
  "key4": "3oC6mhBZ15eJLxXkTqjZ5vN7GjneRFWfcygBas76ShiW9Hi5u8Sm3sHx4x6fvZ9wrqHxtpCuq41nJ2kUdWtZka6m",
  "key5": "3CuULUBFYiUrcJaEov5ychzUKawjeG9afWHSqdaLGN9uggdDhBzSZpYkNCvhnhXzbVEoCYVSmfvDmbcikAiYb3zL",
  "key6": "23iUujD5DMG7tdCGAzpErqMJLFLzGbf9FAx4GoELGzT1JMtpHYykKDDyzPRaqMjcuV1tx1XWdDrAt2SUFdBJgBMi",
  "key7": "46LcNvSxxKPxP3R8CcAA8677HFLbMB3SWWcAEreKsKSD4A7BdLB7xbS32JZMhFQJt7oHAqzEJ4ChgPibu7DGSkTP",
  "key8": "4ztgQmcRL6LeTNbxhw6nM5U6jkBm58zT4SfjakN9sQEDahsgDnvWFXCKiwUYau69uEQTLwPC6fEowUDTEh7eWUJh",
  "key9": "55hKAvXJLHRxMV2LCRWuUy4ATBWqQj4SpXgAxeAePcQ5wu4vMN7PtSjXjFfxjAfYWUb1ff7AhscpMqWnw72oh28D",
  "key10": "4e8gr31WHwzMr5AgV2LE5jJA7WATD19V7HQXGXeZbcM6oZw8JBP5v6xPVVbhVWHoYtmUCd2CEakGG1SzC1StNKFr",
  "key11": "4zHDDiPACcLDVsPb5feQTM9H28SKMRfK6UrAxHCqTfrvDqfi8Gqnfeez9EFDG9gZVenbRfvtWVNnLFuJTkm91xJX",
  "key12": "47FxcggNYH24pVwK4Lvb9UQNYsmVthE9UwhUR8t1uVbyLTsRBs419oru3ud8d5ShsQw3MraydqwEG52vbhxpi7gx",
  "key13": "5eKWRUg1rHfFk5eEJ3ASKX7nV4bragEiWzdVEhkmCwnqok7LqvE5uT6exz7oBnMCdDgMBt8Yd8cNmFgUCk1dTjDW",
  "key14": "4GwEcrvShVPQASG4bDK2HyKiwmkaG2q8U4PaYoQe1gGvcowNLhVCLMzbHk3Vy3pXuEpnUCQvf1M5zPz7JESfRbTf",
  "key15": "QUmCNuvarLsyT9Ft5gtETmsGevs67L4MEQBfHk5dHkbVkTYHa3KFmYE5REggXxxyzKwFdCFUc82CnpMWXUpT89j",
  "key16": "3hYVbzzx9NjhBT3mpquqNeXfivGwTgqsSgA8Cf9q8Sb85TzftL8Hq37jVUZZaangpdFyF5DYTiK5mQhxu1K22Lms",
  "key17": "3Ee2fYPvPfKZ9KJRAy8Gbn3jTQqjr48gmESAa3KXDK9abVajvguDDY5FpoouhKZWDRPRhsEYJirkuTnDdnVJNUYD",
  "key18": "3UNKZzzwPuJqG3g3wvYngEgxQMTMp33QuVNYBdTvdAMriPrKJZqYPhrkMnm2ad2Sauf3urd7nerZ9z2cASnz1GJ3",
  "key19": "5TvV8A9S3xCma9BpWayRDVzqreW5oSxRSQYDPvQZUmbuvTDYsAZZw3rLsKrycnyJdbgsfraFCxte5nGcqcWsqBbF",
  "key20": "Mg3Atk5tTGzPY6gqfkp3jzHjU12UTXR8sCoduQv9EGAkcy8MSz8ikpDR5oBudZzMsZCzHofnSjWV6CLVFTamzKA",
  "key21": "5a16ZZ8kyLisxWwYHhsVC5KeuogKUncYujkGmXxb9o2HjSCnyJsKCJhDAnehjQ1A1gdnqrCby1joFVnXQTWWNTVu",
  "key22": "34LsdpwpLLx4JEEe1hWLLQ4N2dD4YuSu86mPHMPW2Si8bDgbCJqLDqNP8dPpXiT8XwLZdcbPqZf44ZqDLYSEx7Du",
  "key23": "22dzeUVsfWDvHnnuA25dyzBDQmhJE7mW6bWsxgzxZDdDeLDgYGszTQeWBTeGKYSgzoWSgCm28FZo2qzZVqsZZp8N",
  "key24": "5GUUTtpijzcuq2jmJ6ARTPYkdBNDMjN22g6hbkBpKu2a7dHuQjkJMo7dPiK9r7xs1P1azFRgFhb1GJnGA9ufXP8F",
  "key25": "5ztxNJ9Lq7WnzKWxPNfxgCeqvP6duRo3VmB2rXWkpR4rEur7a1RVy1UyiMBProqdax1jueh6Mj8w88VWZFtEjUJt"
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
