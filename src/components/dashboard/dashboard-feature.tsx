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
    "QZRUkPkpbPKhahCKY6kAtznHPofC3ywjVzDKZE2NMK7jyAVzTSmswWKMirfTCADuPu7FHu6ZpnCgo28rNRGh5SH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28WKvuHrcoyBZYJyp7BS9LPM2Ex51DUtaZEcWKut5G13SC7tSd7LRhZfk35fKZ4aQvi63xdZCdLJSTFdyPvf8oNy",
  "key1": "4kVFn9riSen1Q87SjxeRXYfdeaeSkUKZ1eEFtmMHRgxeu6W2o9zNuSjwSndfM2G6EkquSPhoHc4ixrpm81CEnULL",
  "key2": "2H6Drfyae5d6Kiw95yyEfUYY9CLyQkpMMLADMMbrm41M2UUb4AM2KTwt6pz6MkX2PmEGHF4uDix5yWHPdyMNvtCF",
  "key3": "5UJRaPDZ6ya69wBjUH842bYGwD7DYnEi7qRvpk5gEPTa2oMpdm64VWBXzfp5mSLE5gyPRygFdHHNvsQKP5cm4Bsf",
  "key4": "32fmTNs6r2hKtd1dXUQF23JAGA3fzPFaRUu6nQow37vcYht17dzxngC1GPoFLv8Hv8U1b7b7Q3GhjzWCLHQpozfY",
  "key5": "4MZ511rXkHu2vPAXVdgCVXUMjtCJbguD9jHjsQp4QQ9Z3moSgGxPeG4WLre3kxsuzJAvRDmRetCjmHYWywBGvh7D",
  "key6": "4DbCFn9HMh8Vk74nHTL3c1RFSDEzJ6YfMqvqqYF68Jndm1JYfKsjTRMRQdgC321FxHqpzi6hETJgWbnu1ufXTmMK",
  "key7": "5svTWh47HD97xsJomL4GuQab3q1DwWF8zuNWf9btuKXNZ3apb3i3Lpt8qrCak1agHeVwdiD6d4PDQvFmusmsfdok",
  "key8": "YTwkUgo98LN21vf6zM8QfZmQKiAkbn6GPMY6LquEc6M4Px32YF19AqZJCHp89kTzAo4n8zNQCSZqAE6AodiXeBN",
  "key9": "2ZP8mCBzryeR8XJ5pDCxN3DDZPEoS8XnijCS6H7GmWcKznFP36hMAYg9zkePT1j72nigDkCghLsTsj6MtDxpLbtn",
  "key10": "4saJWP5dkfjcnZUadYwPU8DPA2yncq5m1eRqidYL2tK1BR3fmdkqGpqteGCdM3oygSLdsBU1wuwY93GX1r9NsAYs",
  "key11": "3HrMGaE9JQBwQpPSkZWE1eF91P6pwC1HAo5zCXpzTyg5C6qjDLrvRGyBfq9LRqjPFe75s7Yq4LoX55awzzJ4MCYP",
  "key12": "55Lh4hAG7mCidBgkusJAwrHN4zJqAJ4wev3QzE4dEMpDcicrijHx9Y4jCrTLD93wVB6hbNV6baXvYvibUeebw6Yq",
  "key13": "BnVWbZZhWT89wV7nQ66HhiHfiyZq59iV2p4fVxmyjnfqaaarkgLj5gC3qNJRdXNVxJzbYGEQLkMK4sq4USErmnB",
  "key14": "2MhkiWA9viM4878eDLrrYkH6C6suEmcZaVymCjqyFFxcXi6YPoLiHhYBkdFTuPxmQ9JUBdvrPVapu11fh8ac9fug",
  "key15": "2ENCjsMk2V1U2WQ6wf44JtDevUoSvVYSNXUVmk5aGQVPQVCEx63pzxZ3yBDTaoNUGVZ3H46uAr55TgmYqbANfXbA",
  "key16": "4fUxQNnQUGrJXnP5n1iWLRCvrZfcDkppVpNZku9XddbdSeSBhEg8aoXVNrREdLrLaXzA4dF2MuMqbbrrz3NeZYRv",
  "key17": "53mdGp6t1qC59X6N4dGPhYrwRaEyL3So4HFjEyxZq8BdiPJVFesZpJQuyPedHSVTF5c3o697RjErRPRpBiXasTH7",
  "key18": "49S5V7mtUPDey6tPFtuZtbnMVMhZZ3Fg4MUzMa6CaqoikYer5JiFshW3fU5xWzEyfTo9ZaEsoJVrycFALJaEfNaz",
  "key19": "V4RSrtH5EMnCkFEVyZxFvYPQQjjQXMFRPJLLKKMxT7K1ca31dbiYWZHR9vh6fiqpobfckyfercjurw1bV8L9Cbk",
  "key20": "4T5oAPDY6uA4LkakBxUdy6BPGc2sYBosSceYGysR6Ud6hpnmpZrcP33ADcewydjJ7yFRbFNR8TWmUpDXTXe1MZyo",
  "key21": "4mQeiqbEbqbvnqMsmUjhU2MD4sfHkrAZHJAZP2CW8oyQjzPEB8NzmemDbaK4vLA91PpvFxdi3zQqnhCm7KVThAqU",
  "key22": "4W4nEkqsdryNUb2bEGFomnGCbiDBhTY9oCmbB3CWPh4GYAWp2mrsa1L37yYV6aQwQJc46oKEhiVpNDQYMZnmrL6U",
  "key23": "2myBiUJrVaDZF6FFM3vwhVqj8wuufBJCUacKqJtNugKoKW5M6mxdP6WZVNSUyDnSmDH3oAdwbFthqnKFMHSuyZ4A",
  "key24": "2xbzW2T1Hem6PodQcZceaWZmfxuqzM2KTFgcJPjRdLRrMbDvMtzhADBJUAUeknc6pF9JkU5NDTy1dmJVSsBy1ZZH",
  "key25": "3xdCSqJWQfXUe4UQZaWjjrDJuL4yRGWWAvUarHgBhY6Zsw3vfxmgsVX9czzZ5bkwv6W5fS2SfPrXWp8cxdh5gWN3",
  "key26": "5QZmu89CZvZvyBLv2AcN6QWTvUZhnxKAdthNuQS7JtvPPhBwiFA48dKsE9trTYuRxBmxMTgk2mrPdGeXy4whpRG",
  "key27": "5rr1fPXzWEwNRoVJTBMRhHVVDxkC5DN6ZP1pnUaAdnKDdXPD2wBiY2GJLpYcLMQ7dS6jTaxqSNQHuq7ki4ghMwZw"
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
