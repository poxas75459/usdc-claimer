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
    "Ejwdwcs1nGp4zkCpajuCorrtjXSJYLSm56iSuaEXPc9C3N9J5bFLJYsBMZv1HECxN6AcTNPiSZqdm7RiJoyx5iW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "uQ1mbqZhqzix77XHbYKPVtprW4oE5yoMSJiaxGpTCmtn4b4T3Phy3SPTViTvWVd343krL517DndwwEAFnhGuJSt",
  "key1": "nbDfbjiEsMqv51qxuyKtsnwLXrAEtDyu8a96YWUfcZbtRt52DWkZiJCMenYaoSVwySDDUGpqWdXtaBFYqJoKsDB",
  "key2": "5CnoexRL5Rj9sjZ9uwAnsajJPmARAJMJr6d49sw6mNkRqYPvDUtBYis9TgpS7wv3oVAcoXN137jqHmA5GCM5Jb2M",
  "key3": "2WkRAUPbCxUQspvsKo9sVNtWTCZ3PLg2dfihKmaCQNgqEw4JnEUHkHXHcViimLBdQNTL2CqwUX5udwLyq4Y9Zndw",
  "key4": "3ZgeDgiyUjnjRudiU5VX6GzjNqveeifVujYFHy4KcE9a4i6csdBeNsnzQPSWnEKj4sq2v5hTN6mtSHiqQbTba2K5",
  "key5": "2E1kkXp5au1WB55dejmxFCpJYXZ5W1wF2bMSpJW1XUAG7RF494eV4wdvfFQhNQHSkNiodR183hRSNt8XNCifE1qj",
  "key6": "4rtWzF5JDozKAtH7ZgTsJPk35iJ9B4R5xiNYg1Pd3M9JosErJJfE85HjYPZJUEmK3ZZhsxrWQMLPyvPB81jfVsEv",
  "key7": "5DNcTLC1VjscfVBC5Tkd3QZ8HxgebatoxYGFFtEeXW6S6fuxjftmJao1fFWp4maoaXvudrXQoME7mGYSBenDsAvv",
  "key8": "3DXB5nF5Y3QESyEz3r95Ht7CNnX2vv4HHfeEjX73dfiSyXDxgMrhSVWkwFLavFsv8JAEQLnNGkfetawD1NztGNDB",
  "key9": "4tMN3avLAdChWdrGaRwVLHiWabU2J19kcMKXqiJQ2iaNaD6DKw8z6Mr1hxiCXPco8Y66MZPLDUEsfUFFo6E792eW",
  "key10": "3zQA8Bciep6BCua1nzXmr2X6cFZhEgZMZh8zZAEmDLS4hCMZTPcikpyAwDQ2xCh4Cdj8CcarXiAFnNHLz69z2DKV",
  "key11": "5yWNF4y5GEF9KFXHABq36ZfLocyyQo26CqcwuXXQxYywN7GQfJc2CwmpcD8APTo4g684ALtYSG5nxmb8dUMHqH78",
  "key12": "4AAERWBWPoSWUpTD17p2NUa5o4m1hhxMadjYkFUx7qFm74ytpw44PqfxtAWU1hRQM7mHJGe59joiiBWyV9wpWFr",
  "key13": "LyGHuUsuwSpMMJZx4hNwoqYFe962UUMtWe6sxmnY6vzMSWfi8rtxNMGesnQKosuCPZhD5pQopETjWgJr5KK55mp",
  "key14": "4FYQw3nyvs79xioJeXbJjJ5Ner4hBG27imMTWJmDcHnyDTiVSGnpCbHhio3LHn2e7TRzgGJTq7Bb6PgHAFL81vPH",
  "key15": "Z3Dm8yM6XJgQ2NG6VQfNuXkx3YuQfWGoftWxskDfVmrWLmuqhc5RwERjJfzSQ6gSh39fa9bc6nJrYxR4JNeUJst",
  "key16": "5aeQ172nX4AyP57YyuLz6Pz7r9Tz6f3BwSgX4VkQWr48x3c9hJKadzejQ7Fz7KxxEL3DeXLSmQ7P8YQ4W3YfU3wo",
  "key17": "2AsFpUNkZE5ehGfYpGkVAhxdRwUnNWTzFDQ1tCsvSXf8Ek1x24yPcj4HMcmUs3ofziRMWWypUVCieAJveJJKtpPD",
  "key18": "3oPB9zw4oEqjgVfHRr4Tw6ZCKMU39qb8M9vwQo1BtLAheeZyN4EufWevHRfaNZACJa2jJkRGE88X988KCyEH1Jqz",
  "key19": "3KShwr5VrXyTawQoirxSFwqybQioZXHMuhxC9y9uWoh5urwvWZ1pBvhUpNCR2nCWbyaFRbnf8PAdutueoNP9q8bM",
  "key20": "3n9Z2xUfwhJ8zEfAopMfReUf2QsZ1qDvtBAFCDZZV2B7kT3fKv5Yin4Rk1RmL1g1ZFsvwSn3Wv634NXh9eFxLkyW",
  "key21": "2HkreNuD6w8AHi2t8nPUHcmbroridtz6kU4tAMhXiRijCPBzneXVU5sd6b2jhC1VS6iBin4jTw4GWGtgQgDk2fYY",
  "key22": "ibG5gxMMfLnyy65GKN2xosB4M8LLCdmAg3nvRx5n1J9TrHhMgDirGSfkefMbCh766Bt2wJNoRUiUCnQHHVDkD5M",
  "key23": "5AzqnfNSPySTdBwL69CSayuTHXNx4EXxZft1AUk8Qbp55wmGqSFr49hoXoyVNTGpVgjimyHL5Rv8RVRVuGDpRorg",
  "key24": "5WeYDEd3V6jc9K1p5AQXZ9oYzwoQSUCzzdmRFaNu6FL2KTmM8A1kQZjY2uFjHhYCRMd5Z5soeBVR22auoDexSehK",
  "key25": "4EknCptLNM9gS7Sf1k9F1qRzPjXMtMwT8sqrxxBu8whnE22Zvqghwh1NQqvv3LTmfAvvkNuDMyjB92Jr25H6JxTA",
  "key26": "G2KRsb1RvVbnTigVjGkuipd2Prj4kcUUej6AYyXJBKx1XVNuNztEBeSg2F8JJVkkMaYnJd6HUBYXsuUJ9DBYeRG",
  "key27": "2HfnSMz882QKowkhXTKCczuLwH6RZyvUzjeHre4bkdj9TPNWugs19g9imJx94KP9NbVAZhB7QxMwd8QvoR5mAaGe",
  "key28": "5wNeixuRNkZDLsuFL91WJ7BNxAg4rNAmKPrUimWNRgwmYycEmW2cVQmvSfiA2w1f3uPRdLTBJFZxXgQhLnp5DS8t"
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
