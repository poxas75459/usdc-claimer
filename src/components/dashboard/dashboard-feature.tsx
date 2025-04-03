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
    "5pGBppDVjnJrtLKnDP89pDTvS9dc2w32ZTm5CpmN5Jn98TKbuX2bA7R3Xbu7qNdfxeRKL39Q8Zs6txwaHeNSgYpH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42GWTnpj691V6FAKvnu34Aun2NVU7tkb9zgoaSeKWhU3WiXfZm3PoNG8A3mGV5fvChT6Dnpj16SqBEgAtCrfdaGH",
  "key1": "4neefLuKSuxGaRFQ1GuRuBuTqLDgfMCwxoygUu1zE8efkaeWLHVwtMFR5jETAxCPzVeQzNPxnZu9qAHYV2r4CadV",
  "key2": "3MyJ5GYXYUdsaYVrDtCJWT38h9HYkQozkmESPoYkHNL8Zgfpe54wFuk734Rtb5NShrgEjucadZULnXK6UtXMbR8X",
  "key3": "4bsbhZhtKarLNxDFqCw8MGet4exa7mD16rXZfBucNbvezD1FKQPS28iKdgWqjwJLrueYQusMfhhbUChtEJVStShj",
  "key4": "ELrcBtRRYRheYsjnFaLhtQnWkvfNqAcpE6RfNPfSufRj37NJmkUucHQXJCkhjiav2ER5Py1Lvaqf2we18AkNPgr",
  "key5": "3WUALnq3vzDV6bu4FZc6ibC7jA6fsDgcfu3RZtiL8ebiGoCJyVr8aCP7W8BHq9QYfC2zJWbUTLghef1SwKi6idTA",
  "key6": "2ML8YLE3B1mA3FKRyE6Vsa29hQvE8YrRjp2YM6uBEkmbwvtPbTyUp2forMybgtc87XBJ1LNFTsHuwi6HZhMhyo4B",
  "key7": "r1SKGhVg41dUL3uq8GGyoouCoFRWrgf8n6Cib6phM1T8sY3GRppou4LxvVo618tLcwEfmZWpvyydBTsVXssz1gD",
  "key8": "DvZ3fg4ZTcdpnoTYTBqDcTtBk6pJm2CCTNtDnGsBUH4aaRmXqXzFtwhiDFjw4XjdfPYTMhWWQPifP5dLoTS1Bmi",
  "key9": "54uBJGC9RSZaTuzqQXHNKrj3kU1GWmcu7erUoaeKiNzSFkY2GpdhnyAxFSMPBmC5tV9LHmAn7iUFTHb48YG4xe8H",
  "key10": "3E3NBt8Jm38qnkhCcQfFBkXcoxy53apdrPncsYdGHrYqKRamVxiHkWKu1QT9KoS9CZx3QtprRm1scrbKG3hCDDPH",
  "key11": "2hgbEo3MG4gUNNadnRfxxnjFUwu7GjYSJmrFjat6iiZ6obaDbzMGKyhmjkhr2KHqDigczqq4pX2XUYwVUyJgtjJ",
  "key12": "3z2GNhU8xM2WD33tevt38g5kA9rC6ovxU764GJJhUuJZ73g1wfAoJG7auWQESvGUD26Z4LB7j9QnkPT1dmKwqupV",
  "key13": "3PEKstNTpf244nh22caNQSVsdQayJmpwsZNWfunDQrDCfgMydFKqqmT6DqsDHS85Ex3kpFXU1XjRXpSNkFhP4ZS6",
  "key14": "ZRZ19Vk5tyDp33bsotdXuLivJncmSyoK6jQUwG2XTyvcB8ABu3jZ2sypqkt5ZsRVWYw2vMddKYnbdoo5Ag3jQAG",
  "key15": "4XUbMHNg4UQPCvZPXrZnYPtSG2F5HiCh2aiu42pHXd8eJhqA5qN7CcfShjusHYxfVEe9KnSccyBjK9TBSxCpFJbM",
  "key16": "48UT5NuiBvSPCbrJ3y8ZEeBtPq5uCsuehfk8HXKof4ASV7LJNuYP35mqwagdMnfPExukSCWUaCwWfyXmiDusULtL",
  "key17": "2ra8SZfwrtMhtDmKxo96NsJd9bb5wmRS3xGPnCPCoQSY3uxKE2PbRxeqyiU1HaX3cKwyKmgKYaif9ncWKF1WmF1n",
  "key18": "3GGGKDCk4n3zN2WxLDhU3hp9dz9Y7LxY7k78cFHktBDX4k8ZD7wVVQkXKuPu3fiwnooByPwXRw39cA6EvvrooBgY",
  "key19": "3FFRw7AiDWNfJEkuBTzCbppCR6jaiq3KRknoDzN9STnYRJvnFhYp5PeAkQoSsrmfXAqLCF6zX41A1frF58THqVuf",
  "key20": "3Nd37cJ5rFzzxjnGekG65B3GVF4oE8h8iSXBj7Aogi3vT6KcchFnEVHSnYyEqLYystuMKegiH2JwELSvL3TUfdLq",
  "key21": "XBCwexuYwW8sgAG7bweSgnXvhbHLVb9cieMBygDGZeErTvY9xzfAsUV7EoHYiZf7wWaprXUQLsMjBTUVabLgET2",
  "key22": "32bjzoX32gURu4tpQX39JXtFy5mr3pKAgWe1sdcXSTBD7DyNeCDnZxLXnVaVueWmGfzCmWsMMBz2nDe4uTQryLzr",
  "key23": "2UvkB7Eehs7FGmLkFyQah4b5nqdJDUVXQSRhz4KEW2SY6iBm2ri5Red3wxDJsb8Mny3mCMi57Kih5fPNGUHsScYM",
  "key24": "5Ck6hBhMe9FmPNedFBC3yyuv7JmNQBqhvZDmVgU8MU9EtU9BWLbyGmvnVGQff1t4ixvdErkijkze5VnApo185d9E",
  "key25": "3xd58VQpuJoBnyDfBYELdxnamjEXwGq4rfiZdiKnXYRTtaDNd1Ve7nGwJfhBq5aVAoPkMa3bk5bnMSfR6UmAX3YM",
  "key26": "tHQaY1721UNUZCDXZkJzeBpScFfKhdf45MvjMsvLuWgYvibbpL7nZoSFiTYSVr4cCwiCxi5etp8myYGpKC5R2ed",
  "key27": "5PRax2wi712Zmy1VGjy472E1rnbKeJDVGziy5EeBt4ocBmMJa7XzDjamaWyFVVBbA2stxNTGrBUTULBAyCUuGTEN"
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
