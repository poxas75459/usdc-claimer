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
    "3icTaVnJpdRJLbgBotpJTxDdNVjoptSq2tBKoJk7WgnLS7b8eGoWL8EWU71v3C7FNyoLxJdF2gaYqmv3sj1XmXs4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4839SZypeyMJpxy5KU2LBX3e9mENdtpqwTbiCSvS3hLPVjTnC8LGPexVAYfQSHLeKBJDLXMfSqrKyhmaqpVm2Z7F",
  "key1": "3fkuQUR6XPEfd4kn3bGUWwptCP74hoUEsWnRP9dfQ5hH91CCutSrRfzHVbm79brspGzx8yR7BavSd9ubDi4U5AKD",
  "key2": "45fFrS4DkP44PoQkLApJsZEZBz3S9YnykjgydHF6G7pye5fvaFpWhA3Ps6mkJ2793y3Vqcfj2XJuBBSDLgaPEeBE",
  "key3": "3MqhV496SUyJGF8ZKVo7j6LduWJoMy4GF8ZG5e1UX4WBZBsZQcG1eNqVvnmWEtVSpYPLxZy5wvvugzmLjesxndSK",
  "key4": "BKNDGzEDPB2BjMurLjF4ETV781iVWkBnR5JmqntBvRW3enn4VhAdthkFLF7za1rjGRgE11aLXLPFjGftghkTRMt",
  "key5": "3SvcHxR8ka7WpiSxETnNwbHNNopMnpJ1wzZ8mtJzpncjTM1ntp6uQ1BE3uHFzpBfi32kqi8JuHYQ3xDnkSD6fuV1",
  "key6": "3sKSSMKG6oYJ4yEC3Pqb4SJfyGEFWCNQZV2hMYcsa6T3uPCtFXMnH6YCb6i9Vq5vyX9TVsU2h8SY3PvfVxhkcfSS",
  "key7": "3ck2WoroUGaF1UjGEunGZQG3aJgzRsEbF242D4xe6LMUF6x4hYwEWq145wbu35PPYPAa65XqRYKE5cfZLirCxwtq",
  "key8": "gobEDybzfHeaGAU14FajMUd4pB7tYmoD2DtpPuimqNiGAeoefAD8BrRZrXixtAbUAM83CKmJDCFb2iWF7KeJ5LV",
  "key9": "4JHbDBEuZRa2SrVf4gEoes9FsLuyTT5GKrym5AK68WgjsWcCd83EhQF8X37grZc5FD1GqYmqgAPUM5K63HVHn1Xe",
  "key10": "3iYdaNB7q3Djd4qTdc3gXfygqATfRnAqaqark7QzyGuXuZrizBK5mRvAum2TtTram67JxT2LFNQuMs8F5XeET2AF",
  "key11": "4F56jvt1EKYqKZH9jAzSuUvJRBWF2YbC8UmkwqXEAv8H23nsL7rhXhV84fSB8y2cXthLRiVuvoLgjyxzEbkeqJhf",
  "key12": "jfdxkgtLreMG2WP24dCgKbt6nrY7PGwEY8spX4hsRmgz4S8SucnCyv857Nbi4AUCASRQRZdJNEZZPRdfFL9h94K",
  "key13": "5SijgF3dtdMXvzjY6ArbEeZ3rXGFA4e6XBZL7bc769AGj5619gnNBRiR9uXmMwbtPHznuLuTXP3UWh48vUkXXQCs",
  "key14": "w9TuEFQ6obyUFL9na8d5H9SqroEnUYnmDuLPkWNJUdhB4QzLyh7TX1KvFEzDSKS8idCUEcYoBYSDbd2tXCx5zkC",
  "key15": "9Vr9Z2PaWRmJ7SZj2s1piMdLtG2rxEpozkcjoxVNK4iK3c6iy2d6hK2224ESSi49rRnSZrkv4JCY2TarLDL3BGV",
  "key16": "suycsPmfbfTsRpRUPiX5FEnYm7owGzth6CBYjEtf9t5ZAGwtdM1RqVGPFBcHsVkdVy35HiQvYjU1EoM1TTypbmB",
  "key17": "4SqVvGhUASoPDpVVffiztrN12npFa5wPZH2dPvpKtJEptoLG3SZkKhUG93bZM6MpLZN8u8cVYnSFkEmyesvJsoAj",
  "key18": "5X88RMgFB6YRokwKNtCLjyGMfT61dNAsQv1MdtyogdEDuPnDBeVJ5Zj3numoTpCaLYYM4xTi3KM2Lo6ggbR1pc3w",
  "key19": "3jmHUDXM2xY2Mf8pJHn9ZGG5XeRXuaztRdrDxemGJe2WJxyzEYErcWgP4mppvAQQnZg1HAP4Ar1PGoUjmcezhtxX",
  "key20": "2h42KnK6wT1JpgimpyHNYEQ11K3Gf3RaTjxW2xhihudfP1k8cR6KQuWaAyz5S9jkUP8uvv4igH81pmxtme3YD2t8",
  "key21": "4wHWKyh26yQWLTHQ9b4Y2SeCSeoaAjAQ92r22H4T7pr1nkgtxieFYbbSMgaccBLgoXYr2kyXHqwvR1Fqk3MaYnzi",
  "key22": "2NYDXgWGcuRkT4dNXXERHqVEo6wJcA4E8tFemN1kxjWCTy9kr9J8JbUE7cHXFc5QDxu8RuBYoU74xETRwBYs3bDn",
  "key23": "63oRco4rh1egPALGJdMmQ55D55dYy3G78HMQJqzenpoPycExdyBG1JLvxYDYYGY4BYjMNidfsWDKAs3VxWGNcz1f",
  "key24": "KnkYiLKfqKoB9dcAiA8QLxriVhbbg23jTNqXGXybXJyYKQuM4vbatYDcMQ21xUQWVx1KYwMXKSv4jnPbNEfw9yB",
  "key25": "5XBsvFSH2wXFDZGq7Ldx3u1zsKjnxCwvn7XzXH7J2Adq5YZEM9joWrT6Er623ed8AWAVmbeeDRD8xSRDPLY9JAFc",
  "key26": "3HjvdSA6R8AKyUurLWSBB3C47M6cA9zZyK3JGxapaJNXAYw4kES2gnsy88jUAioZ4ojN2tTyi1kwoSetdEn9uZeM",
  "key27": "9VcveU5zQXnd7vFhzyR1SSAcdfsBQ5PWBkSZWA8KJsGbiiw5MmeWyzbfi5TcSYa2gQ3maFs6KC2EqHj6cymJJJY",
  "key28": "5Kmppv93yckLYjjP3uS8gprg5mzVzHRvCt6Vyc2ZRAJnV3ZGUav35aPSC8Jt9ivmepxW5FADYs1FQJppRfs2RcxB",
  "key29": "57XJkqiSacxpwfbBhhmY1pBJRGEqdSVc7jUbZH8Vtj6AML7hR8okdpjLYPXYoEB7zX7GhJ3ZGxCtfXai7DxKFfo7",
  "key30": "3GjVmKEn9AxJsMnU5v5AbB3uNTmRUaoDdhqmnHXxFjYidL8QyunCMTCEwT6vEDFsdgpx4mFAJG7skeiWupPEEBWH"
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
