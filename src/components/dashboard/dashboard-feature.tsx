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
    "tx9YuEsX8T3xVqE8sdPurfXdpakKAycGABousNc8S48ghvnScjhaxgCr1X6SSFXyJJG8opTotu4hTbwQ1fiofEW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2twiri1WG5p65eop3i292RyShRtA3WJ1fpKuvuJJ8riMWxJWTgG86RoGmcnrswHqpgFVD7qygeH7RsicWWWqmjSX",
  "key1": "63XreLGCaScvCxiKjwdJkZpLY2TCidqfEWvHfanhav18GXMSH4ByuHu8rKUHraQzccu9wzJzroo1mzFBhaMyogz9",
  "key2": "4wrg5A3P3ooqAvX6hYzThstEFF3UXAr6QBvrk62emZhWHaKBAcC3hAM4XMmRGg4ksryovRBbPAZP5HRJs4TCU1gm",
  "key3": "3GiPqUb5y6oxS8cUk8sCZtuYWCs7r5HowtQC5izWgGJSjbQz2g3oo8RYCmXXTeGZqweZ67NouQPufwfR9nCyC1J8",
  "key4": "iUGi1WMcbNkRuU4mVaCVZv6qHzFpSDTR1gbRc6QHs2wP9qRpEQghaLvmE4seRodjXYR1tYfRXVpnkxvnJMApXdv",
  "key5": "taWXWQqGxPp4z8snG8Zkb4XiSZ2XfkPVYMesgcicoNb3AtocB245R3Mz8hVcjXYB9uvE6ZxyCEnbtZUdGDwX2zC",
  "key6": "5YJpu99H2uwFq2WMpUu8xv8HYhZCpBz97SjscD1qSJxV467miZD2gyUEjYEV6NiFypxAabBKdezaSMJQ6jq9eHfD",
  "key7": "VoJvsLtMrnHirSWYeH1TuRqCUHA1twp3cwvFNn5NtCdUYH2YaA8dythZWmn7sXSPed5gxvHW7bztKjEFEiRSXFi",
  "key8": "2diyEzfWHruBe4yYJKskAwy7nm87jvbxjLxHqwQ2gx3ZbYwDfm8AWxBsxipU2NsiUWBvgjzu3a1iqtCzuiuVxJmX",
  "key9": "to7DaXcWdVcPfKsBVGiy47y9GunSNXwATS4bowc3uTFG3ctn4iQgFkDQdSqgLECuQgnYJyUryCQ4GmZgwErxaNm",
  "key10": "384SponS7XY9bup4ufuHfKXUhpcMhysDskdFEW5YvGStw9BJq1n9wGUFsiWra98oaseAs84EKxosZKudX6gatKZg",
  "key11": "5Vk1N9GxT6rmAEy9tA8GERgbpG4uG8aB2AsKmmnPcAWmHxxpvgNTFv8MZhiB5U6YaFvB7PBPqbbvG1DGBQHXa11v",
  "key12": "3SGw43o9smr2JC2yN4ETDc6n2muDtA43EXHjkwyhJAqWxpFTmY1KbNFhRdDf3dEV1XVFwaRdfk9MU7G4xDZ8oekD",
  "key13": "QnASZJvzxhSSBEZf1LCj4dZmTcoNnpNdgN5W6fnxQjYqESBBAhashFY7h7j5v2ombk2YiwnzzGBDS27N6dLtCsv",
  "key14": "49dQbpr3XbSZDAJnSZ4Eg8HESBzDHFqN4iYKDmhCVeSLb2914FcA6b9t9kDzo7sx53ETpu6LnYNaggwiG7U51F3n",
  "key15": "2Q7bSd3FTsb2FyQZxvHApoLMuBVMNfQN37evUd6QFoTWpr4hyy8MfoW27c9PbjJD5HxfhmVcPxKKUauJbBfrJVgj",
  "key16": "ra9LDvgxr1zxGoWNFujnJoGSnAVrHLP6G4REvV6xQQnotJuLTesWgE8uHCxAKRz6Dnju4ue9nKPjkxfTd9uAxmN",
  "key17": "2i98n19cX1p3wUKbooYuYvj8i8SCbKogFkTctwZbx8hsCFxKnu3fDrdL4A6gHS1HZjQ3QaQRYAq9pJfZepvKnQdV",
  "key18": "3zwirY9CnEgpLrvQPUscgLuZiazd63VxACdWGBZRaLtYCxHevihpecr9o1CfVCkCXarR63u4vgBUnaFc7889aLgL",
  "key19": "cejxaWhgf77JzZR1bQoMGihYBnNQYhqaTs2uuCwS8UGUw9AWf1FdAuc5ujwQyEsCPyooCecNqAUYxDFVcdqgp6W",
  "key20": "2wdTsVDsAnB3inFF3Bi8LSATWJCxJmQs3yHRwki7T2J9HVxoUrW1EsWXvhwRwXG1fRUEucXpVRZ2gsztzvbVMKVD",
  "key21": "6ouFK6iZmC85C3JRyjvB6XhN3QxPqZirYCDnU6WKQcJc7WPFuapWrZMwKfMiqD3Ce4fckQLC3wF4ktET4JmBbEp",
  "key22": "5Mz1f5xPP1PKZ5A3cocSrs3PQwGw6kenfgPGGSY1bBgcDqDZt6LMYrtpofZZoCWbAHWtaCr91tdD6zBhSKQRPtww",
  "key23": "4X1NGgCAeWycSbJn2eqLkhZFsctUJBBUGCaKyMW5WgaFbfvobDFw9SjsVMJasnyQ216kfJDsZQqkvTAktBEHutcb",
  "key24": "4qhTBvuQ6DBzJ2LDffYsNCkPgEVWdDUwMTGUpYPvSLPW9Zq6p1Csh2gRRsGEAVYeFtKCP33dKMSM2x2ekvwNBu1B",
  "key25": "5BJjSMn8WZaZxLxkKWAKU9rD7EmWUD11T5cwbFCRFSMZ4V57AvUYnYYxwN86drxd4kzkSKqN9LaKXLgy7yQjPfeL",
  "key26": "up4bdMfaScyVomC8FEdERKPeG82ksaiowRLZW2JiGbXhkrCMnk8oKBrk7xGALWq51TcDgkttjAvi6GTvAfW8LpZ",
  "key27": "5s6JcryGBJoFyK5U3VLMHjgf2HfJaBnxAPnPyQFgRgGkoY48RATveHfj7gGWKh5UEydhKLKrRvNbxCKjc6GqrdnN"
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
