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
    "NRqCQozpbGRXuXAdCHQL4q5WW2WgMP92XQVXYCEU84nd2F4EWCRaPQKnx4mq1M1mpx9ZuwtTtdTdci8ZVjyNeR5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FKEVHREEkqyaD3mrE2ASn7yRXmuDsd6iEZuEbjHLibo6H1n8HxgqbEkDCy8KD1BG1G8zUeuW9Fh6TeWKSAQ8L7e",
  "key1": "TWcpJ6NECtRujp9Wsa5g1Bhhjhc547FXHoraeJdqFugcRxfmcqh9VpDRgJRvvNVF3VFYUDs65Vbkp4S1V34dY8Z",
  "key2": "5T8jfqXLuaQ6JtXEgbUyf8L4c8bdgpJpTFoUbaT5tqDW7FMY1C2yG67RKFbXqmobLCXwkhSwz2hf2Aq3XVCg8Mpz",
  "key3": "5ER8K1PZHEpKP9iGUZQWhtEWqCBS6jnm7Rk2Vte3oxrKBeeCMzT1SEB7VjtPiKRJj8w9atwuqw8CoiiW6PQxAUQg",
  "key4": "Zwm6Hy1gDRFNbGGvAvK7NnepdDdvyYWdKkvjehUJ53fh2iZeFs6JGc3KBVoSPizRm4dkvLPifQadyyzvJHdEbFX",
  "key5": "3HPR7nWwPW4vkQ5kfiwALVwhb3ocz3YK24mjNXXvLYWCfL3BXefRN9yjTpBS14V1cRNs99n92dL4ZhxEZqpes5zW",
  "key6": "3PcppAXk9ZPMQTQZMtgnYLi6E8T5nMa9vSz3RjoB8fafPiMauF7zyaFGYUhtpBWPoNZR5KDT2LV1FwnZx6V8jiVG",
  "key7": "aDwiqM5ewvoCBmxT7oWEU7xx3KwwqcyTJTP4S8kfpHXdgCPCNF2dbf2WYt8dLyteBicDutEQxu73umHe7n5v8co",
  "key8": "5RWnhX7xPokX6HM14ejPYA3bg1RosLFqoJZjXtrXce6rkYXcKepCrXpyvZZtG7BqCJsxbPNqiW7TJuMpTPZEiPQZ",
  "key9": "w5u1atKBFC2w2ACYYi4QUKxc7KS6jAY5p7b83Dt73MgZG9QpGwSj32VHpLXUZW2beYdvcQh9WuecHqCzNWHic6F",
  "key10": "5VhqfayRwYioApD7bju69jEutFdr7JXF3aGvV2r339WxVq68McPfxvm6oscScEZDincJpKdX6kNLVTL2VBF41EiV",
  "key11": "4oU7kv1qXYSAveG83CRDapw1a3RtKobPwy7ejG4mDDJ6i7SKw2RDmbcZahXb268rWxhDsPLEgWjAryrkaiSNKFHB",
  "key12": "5QMURK5gBuUqmuDtFbDtsDx7hXb3DMHihRnCnMkLTpcwvHGkrjCJLQnK8e5Csw7yxB26ECEi4fft1rsnsBt6jTK5",
  "key13": "5V1yJWRenJU4DUdLwe2vgTF1pp27K7rVFBiu8q9HoxduN8ppXyS3Kh5Sszdjzc2YJJgmLz5VBb2zzzvqPzWcDvd4",
  "key14": "4RCGL7NyVED6XPMFVJgfXFH1TwVozyi2fa8ccd91SicJ7Pmp2sxp8NEaApJWAh7QMdgiPnhSAhitB2UG9ZBZKY3Y",
  "key15": "5vsNZYbz3mchdF4qHgaMPJJRvJ1BAu5CFzwFntu5x9ZkbbXXkcTkFNArTkDMGiHerb5K2Pq5uvv1ao1d5mJHxD1u",
  "key16": "556iFkjCc6qK7Z16Yxrp5ph6QnAY1R7mEAjB2MtDd5tsm7aaexPEv2rKHCWsuJJGHgQrRckKHXGe9Lgovy3XTrTn",
  "key17": "32kkXa49EHta6kP5KvNqHxYSTvqXVoDKiTbiH8QrPAiyoboJt5sKzNo2ubMxY5q4BUH92Z4P5Mp8oXYG2z4YANsM",
  "key18": "3c2CoJKaj3osap8ezbUnutaAy7wkLQHDzugMKaNcXgrgbSRPQ6mEPeeP1qffXqDXbcNKpMyc7qDnaruJkMAcXXsX",
  "key19": "5PREiU8ELCYPBw78aLspxjjXdd9stVqR2AycCBMaRpi48JPfv3zJeyPK2gBGeba8zwKZdtBPAYY48237UiizDTdb",
  "key20": "5kWKGcBY69Xb9VutB4PxUYxtHr6iPaVqJxfhzTLwCYKH72xPf3RQUGJCDi6S7xiVEGFxCV9M1wD5stStVD8MYoZC",
  "key21": "dnbJcn2V1aJiv7EZgqHfGTiNaGfvjMVFF6HCeWFCbfhBRqqFVvcgdwaNgoi5Fs9kgwNvxfhsgJan3EXVgfArXfK",
  "key22": "2cvRVZn1VeZiVfaEwvVgyzZPEwZxS1BEtZtXjGYmX3hL4VwFFqkpVPVgSaa6JHMxp6sXeCS1Pq9FBxNCYLgo1k1U",
  "key23": "hDr7or9Y6AGqt7SZFhWRTyDr26RmRg6r3z5kZqPote9ke4cS5WJocUQRMixr6aCksfHCz1M6mbHmj3gzUQU25TQ",
  "key24": "5PYfy36dEiVFPgqppfyET5cfx4UW2VJaZwpaZTmP2pY475DvddrQJsBB7vbP9cuo7eGfTdDFdNVNSN7JKdiDmVh4",
  "key25": "rGYqCr2fX5DvukkCdGz9x2T2pQZuJdEwtB8aByfwrEquCpQAVtwrwuntf1wXBYjLs5BrPcnxVav9oAm7rDeX2tb"
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
