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
    "pvgC8Zq2FAQ7atSsLfejiqbZ5Z5osJ4Mmvg2jxGBzRRetaF1tZpaBWSQTo3iPR53u7U651iYqkXYTrd4E3jxFqp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49UecUuMEm4f2Z9dcVTxyVx1ja86DsHaj14LifH6k3h8LKFghre4s4T9J8tPGT66rJneKwyoM1cPSwD9unkKM8dK",
  "key1": "4t7eqd5NnvYA8SPkMWM5PWNejj3FWBpCaZekn4TJiFkgFzh2nK5hfBzVrxBNBML4qStPmF1sBqeWCVQxAT6pi4ZT",
  "key2": "2HYQWRnquhBvNkHat5DDNLHiSwCAMewfchPcweycVRUtTRbRkL2euMWf3vTSE7L6CfXn5d5Cu7ZsEgGA9e7RqTGM",
  "key3": "2WSeDxY3iGHyUVUzndLgDaamX8Kc2PcdANqELfJ12xEx9CreJqQrp41RXeA2DGkpwpsXiue9FrVZEAgKBS4XFVZV",
  "key4": "tT9czspNTyGGdcBcNgsjwpfVN4ojMJwx9NnEqrboNEedR5Job3VcpgQheNYvSMRCcQfKM9UR7kiqbVv3qwn1ybJ",
  "key5": "673wUdSfCmnYGUVwgCDCcPTGBAXRrLiU4Ya72n5TZegYwB93wJ1nmVSKSN1yC4eW7qeBhWvBY2Aq3vQ7TpcbTS9h",
  "key6": "2PgFq7GTR4ZRH1P6hD5qaPHGqpyYAVoBgT9emJNYL1JQVZPyAguS98gDHyD51BqkLV8fTBs5DJFpjASHphDcUijk",
  "key7": "62QsM9RoQag7XmjSPKreUUrzVh4EJo94f8EwqtDMdt9a4TAkvvUjY1eYCnJRG3oi1zoYufuDpEqh2Fq2V8GEKDNQ",
  "key8": "rc8VvAy6KNagsjaZTDrJaGp5uW5q57r64kVgqYkG3AmCeH6Rwg2QvLAQf8Lcery4CRG1k3v9j7LjvFRLXPosjEq",
  "key9": "Q79Qcd17rFSWDcs38ui6bJy1DEY2YqZyWn2DRZcdzFKEgzKzA2YpxACjmAA8ujvpw7PFbeqw73J1DDT2zWZSqmF",
  "key10": "4khehPgJkFQWmDHQJGHhDvXy7meYr39G5V2xe6gZYNYp7DYWevbxWdtBNXNGsDWmJcC4zaLf1mu9uVnK6hDakZ3c",
  "key11": "2LqwrUpcxB23K38Yf9HjM2hjKXK22nPqykAcC3pXJTrcXCruM9HwJqMY2aezQUekmMYLfo4L2JKjffL8BxYm5ZnP",
  "key12": "vujTwm8qfcjZktLUm4LA9jHYTXfJcKz4NvfuRvvXqL4qzfbGWeMjpW58eJM6nqd5Nw1T9sP29RgmaxW6NYUe1j2",
  "key13": "5NtLdVQ2GatNeaBrtQBqgwUWui3XLEj8HVHJptTAXBU4bGGcxwVmFYyHQoyDe8rwVxMi4zzxu1VVUVhyRyYaT58g",
  "key14": "3UNpuXHsYyH7d8p3pYMi1KGYGFLfL5NcDJt8Vq7KpknKS1uwkg6btu5gjWD3pCqGXZBhdH9TeZMStUTyWA2rnoCG",
  "key15": "c9DVMCWhgayQSc4gFCeaAaqK9oRWBEBGAfkL9ZrzUuMZiofuFHt5EAZREc2HzwSnLDeFKgyh2veESfAPbCjaYmf",
  "key16": "5KLhA7KoaxSetNZ1SCnYk7AAp8NoKaAzvZMhw7epW9AqvJi4GzFd7UXaurd5FQRnSfvnZ536NiQTZejUBqUQRjJU",
  "key17": "5n9Zv4o5wXVc8oG1Tfv8D5GmT2ruuSrCaBewGxijH734ZCPm89FkG3j5R6jAvGhtMi3VeYb1U7WQy5QNtfFQfZTr",
  "key18": "4PagC2kEZhDp1CDnASJ876YuQJv33uXf46gAYd9qKsP7cCnhVy8aYRNmQJb1hzGHQ21bhTKRt9fUvHR95K3NkiQ2",
  "key19": "gapmxUcwxrJRSj9k41RsRZ8jXZ6FSasjQekjeU4Wv24NTrneHvU4Vtut98YgFZCcauYDNWT6ahBmo6im6QLE2pE",
  "key20": "3cj2CCQ8XR8ytZFcLfzFDTcwxRxRvRY8fFZN2zNBqBviHXNBpxXGP71CK2bYEYaGXwjReWaSxviYYWzKX1V5FqRE",
  "key21": "4giasgw95RhpPDF5S1UHkeLFmnp78tV82ow7diJd8JvRwBfvv8ps3qgPmi2YYmS83NASbYzBj9wmR6qV566icsWZ",
  "key22": "35eM6mhCBiqzkhKtoi7UM5PNNe9mmTc11qnXUJCFM1xSEHTdEqgk4BFFceJ6GdkiaNS1nMWv7dkiBKUsCpkQ1ENi",
  "key23": "4EcHQaZ1dQ4opYLncNDA13R5vWLtq4qnk6JA1LjdjK9uspoX4WTmbsPAnqQmmtvPzQv2w9GJo6q3UPy2VmQ1L28c",
  "key24": "5ByjhavxSMNefuSE5oWU1BDhFivL5encib7MRM7dsoi2zmqZDBs6FuTgmLwSARp2jseeZhi6YdoL75d88KPqhGJZ",
  "key25": "56cuaAZ2RQFa8SpJZ6ebYL2S6UEVEfamNRqK47JyarrAKM1rXa3UiegeNHdHCLsgkJaaTUvRJQuni6cx1pnACfEu",
  "key26": "SWESVq9RVRtnQa6rsXwS2ZWmWabq5nxYnLZqkcyfueun3T1UdhLSCghjDu5BzbspmJZvw5aAxr3Xurribqx1cGM",
  "key27": "YpzNkBW1iQk9yUDxCGKCLBdFRV3w7Tc6nxn7dcYZ4EGPe1ERkiQFR58nuaZLtRwuzXUsocx6wD3azU9mfkt1LuD",
  "key28": "4Fnnxj6mRY24CJnS4rFkt6sPhEJHzMdD5nto4ejRgFJbHLwZP3cFUMKg27jAgFLjtJAM2NFoTLidLVay4fCjmuAc",
  "key29": "2zwU4fbEzxmx1zzybvsszafTdwMcms79zqXKiztVb83KDvhAp2tspNfFK9wDmGHT7EywQJLneqm9Uj5tNi2usMux",
  "key30": "3i2CVoH5PpnkfHN9MFBGykf4QBsxLan5mWpYpt6kxmeTtSGXrf7np1GwADSDJp9futNGWnEf7cvtYqCKYM1Gbuhh",
  "key31": "49uJdR6jYAST96qw5yP3AXNwU5xQVj6t7DPjnqQgKA1ZeprN8rcdvmfst4sbcnbuDvPC1pU1Wk8ne8nfXrp5w35G",
  "key32": "2dPJJemhTgPrmpheS6zFuvBUQ3Dnd4yf78VLRh2eLh9Q6yaKS6ctzdpAKtrABNNcBcHMKtv6H1JBRfsV2RKQnmwG",
  "key33": "9zyBuGD4EvmK4XvemRB6nQtmri97EZTX5XEDaFXYWNqJ3zgaGHERTBEoERtuB6hFrz89U1UGKpE9UL4N8qAr1Kp",
  "key34": "59UfqC7juhwCGrKnxvLBfjf34kfcfxToXrWs7oadSbobY7mcWMTCwPk2Tg6arRs19RZDthcKrubWoG3zuq2Zmxzn",
  "key35": "4bRcg4UeuG2th5VodrTwwWGoqGTVcTMRmeBEEjf6D9WC7dGHhkw4L6wZ49U5G5zXZKJfRtjirqsNvxLycgFemTa6",
  "key36": "3eQaKiaG3qapPb9b8gjuXoeGnp4JnYnbchbeBkmZeHerQ4ackgyXSSKcQ2DHYYvKcd5ZPCaKHA57wYX5wpcuDFqV"
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
