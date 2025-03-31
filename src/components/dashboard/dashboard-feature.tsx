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
    "HpV6rd1Ne1Nn4GTmBLrjzkze9KJ58FreCFoEmzbpDeGxhTe82evs4vCtimXCSSHAqhV5rHwwVy28odEn6Wuv8Zm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25ARvGpYFNjXKGGQXB66wPDSZEVYwznrwpyVRxg32Etj4F3dxXc2wysxAwE3BieGfpVvMXsVgU82x15FVdPP5e69",
  "key1": "MA8jv1JVVJWyiWSDggYS8Ag4Ymi6eXt2aEtoy43kk4k8BCg5FGJwv9N78WdSkqcW1P6tYdyGTiyBoaC8csUzeNB",
  "key2": "59fGg1iBGjpRiQDz8exy8BiwYc5PksPu376GtR1TRakNSGE8qkjL8roy4kmjwogCGHjLmqQFaN4LDypRT6kkAtU5",
  "key3": "4p6FrNomuvbkVQ7CDyHcXvMQkGxTo74b6TjnRWktZGekByiwGoYo3X1VgtH7kx2NxcVg5pgUWzDWy8ZdEigvE8mH",
  "key4": "2Xk2YW9LsjCpE9bCmm33sZ2aaeoB9NdWDELUV8jeoD71y9sMgFRyeNeb46eLUf6oqN7rNZpbinQgYvwTazuZ8po7",
  "key5": "2VwjxzBRitUyVn2NuYoXFLGUL3LwQfNY7VUNGuu1XJtYH5CrQDsofkfjZypoviWvbaRN9pUG569uUBj1KksxVgWe",
  "key6": "5wCLiRQEgd1CAkY7YdVmk4ykB4T63EuoNk6qoVNoiW4YnJwjkPmANttC1gwxxzCSvsieLb4t9Sm6RCcu4VamEGeb",
  "key7": "3YDCiR9rtPkuXDHhYXUrASDhmyxcV3FGpJt5NKd2UfDVbJBrRgqvTUrYxxVMaFRCM5D8skTLbkevUPrpijNE5yFu",
  "key8": "Ccu3XEsgVuiZ3i489hLungCaDJvTDYrQkCALDFwiuCYcNmdo2HMRehGajhG4Npb19KwFKXXq5JyiDDPDQfmDMdh",
  "key9": "61M3uKqsxWUZUEHmpZzwRmULVxZ3gEFSMv52smTb4SjERhRK3ZRKUER8bvXKbY3S111gDVcyhKJidNXLe8kbE2DX",
  "key10": "2sw9FvV2GE2Hqyg85wboooHkBZjKbAe7YiKJTXxjpN7XoApEFdjtKvPV6TzQh7DJMwFdZVYGS4eXMh2Fb7DgFBrS",
  "key11": "3UBPKb6AMW1zgA79p7XdArtpC1NYokU6m7vGJW6tcbJMAShZk4eWs99H5zRQ79SMTyqcTLt83rPpsWwhTWb6jSyC",
  "key12": "2yknNQvmKV9yt75ssraAYrtCut8YLfeL7b6BA2xcTK7PgyHb2sijyZdq5Zq8yfNbVrRLCBBuqA8QwMVFw65foDKL",
  "key13": "4B8qGqgYctQqr9CtDoSa9rtwcNboWDiP9Gi5TwdWhcM3E37AaUXcJaNVkYv6vg46TufycockeVoJybC1GNw9T6rP",
  "key14": "2Gt2gQbxVpzWCBnjWFGmu2eeykDvfTEBabAr8w1ArDMGjLkscdzQB9qL8R3NgDDKe43XxuCc4jWVLPBwtitNaT53",
  "key15": "4QNWerkJX8zXwNc8WGeKD2SttWZvsYCYKKSXCWCpunpCDNv6rKHXauVDszeTSvPxDYBkyLsAN2c4Rnw1eyPoK2GZ",
  "key16": "3SjhybKRCM7LLxxyaxakuzphY9DcWdBhAiwiq2Gxo2ELdai1Wsm8rMaSwMbndNGxCLffuYrbzGU2PN9zSb1rSYRb",
  "key17": "4Ce9rNTU4SudTB6HJfmk5qe82Pi3ACDuUYUEPPmVN8rpUtXjHfuMgTE99E7zZt6FL8TmjgArynYGWwhaMnBqPZQj",
  "key18": "3zNnPmppbCTj8969TaCfcMg87nyC4RTJq55tG3LxLsKthmmAy7242VPx9jSrtXxybfqMoRPvS5UkzmvxYBXr97h3",
  "key19": "4RrQnurbLn11JWShe3fjtonGwx1JjBHuJnhvyHwZdEwtExRxvrPDPNDvKpCnUgaz9hL6SPc3emcE8bMezfvZKqWz",
  "key20": "4QwtETViSkMwa9S9kg8odLr9P2L7czJDiEFsbqeh8MxqMZzcFSuRw1NSPcgrqrM3dwtue4oHN9e7JenARsjBti4s",
  "key21": "2HEYDhc6QG2uEx7u9GKudVmwUbCYjyT37ZRadaTu9AHXw11VMom1J2fru29d3mVuiwZtu6MYjGKQHM63KH8p9sc7",
  "key22": "5uD6cuqnK1PJonZ73NkC9WenBaaBJ3qohARo5CRc2CtDKgo3eaKseKB7Fn1nevxwnTDRKd8oAqwAWiSGKvuzdmvE",
  "key23": "uf1UPWYiBCTAyx8wjvfgHey3bibEjfRkCy8fzLQ1dFnnFb8QUkKiwjSpKjHVh6oDM5J6Y3jR5hAPamconRQ3msR",
  "key24": "34haNmXLFYdXVxodEundGhpd1URwVFj8k2x2HncarYJpJg4h7B4AWiHH4K7W9vm9KizrjF3BZZVHfoN1WRyCEbiZ",
  "key25": "3CiJBnNZRKtGNBzcADrzNU66czsRXP4SLgQ8HemCLRHNFsTXxVivhDRBs5z1RhFwu2ragigynL7bVrJbkGcAcqRy",
  "key26": "5KT3E3tGuf5zr1aGshDnF5CibDvM3WkyFEYRwbJm3mGKtfeCyL8yjihoUMjzAkthU3ZE7k4qAk7uVL75a7rxho78",
  "key27": "5Sd8k2PKvxr1DqQF3rWDYzVxsTY5wE2naebZnypaBCFbzBJYtUGiiupUb2R4ncZSXQgUZsQnYNsNCDZWjuvHXjcN",
  "key28": "59JMNpivv1S5MGDGz8nTF2bu2mf1irKneBac1j5cdZTuDW8KSgnYSqzixekEoWdYav71zB84zDwMtQiiTtpMJBQj",
  "key29": "2EBkQo7424VwFoE2iEBP8PzZqWbuhkh9E7ou1uMxsUfyLkZKG6wpw2D46xvZ683UMEUbYFcA93HrM5GgHocWpwZR",
  "key30": "3yXZUA22h75NwG46WojJGGbbssv8yec15ELoM193w3tdpUTu26Bvd9T2nE6r1Byups6wwUXHKK16JstCioBUnFUT",
  "key31": "3KAfkpJHQ2ohF6A4g9qURSD8xqNxSxWGXKNBp5fvrqYLzqWAFCVsKPX8hFUpW6Bf5KFjn6cs33Nw6t1UVinKyBRk",
  "key32": "5a9qbpdZroHZXpVmEbJC8GZ3E6rUysWxJPKXKRjMR4uHTBU5EH9xf56jbQzhg7fGW3ETuwRvvfJLbJCxSXgzCxPB",
  "key33": "2jpG7uoPGfopHzsCnMgXAoQCFh9VHoiThRcF76qpebve8a2qL2tjeLZ8qtWZzJ46Vi1MkTzXn4LP716NE2Be4ism",
  "key34": "5ERRKWEAHD9cGfBHURz2vRwJShe2shF71zvfywgmZCDwmGnjvg5dQwFzsTJVEMWQF8Z3kcUtozndp6nSzMs4t4vj",
  "key35": "2QxxCB5cAPH5CuospmpC7JhkkgeW5NgY7T7C8Ri1JYCdPaKU4SeyGhMJ323ZzAknMXnyPLMJtCkwNq54gn9vU8FJ",
  "key36": "3vMitKKYjodTfKvpJuvVgU8gsfEdnyBgtWp7MhaXk4xdNYwBWz4udTPfWEj4EYJzRk4arR4q4ApgHx3cPG4TMYn3",
  "key37": "3QGCPLMitZFrodFahf9MK5A53F8N3T1RWuWQ8J55Fd2evpg84A6wopTrrcu52u53Qr9wUetUk8FAzQpnEL3TNpBM"
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
