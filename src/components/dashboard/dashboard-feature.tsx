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
    "2dUKQ2tDF6HmCfPkBVzU7YFaVnMrwoFDwDn9G52zV54iB3tZg1GDC9ZCMyzi6epcrhRoWKTU3hePwnMGDMpwWU6a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bhqepvi6Y7D1NVkMsGgADSUSsbrCfZ1F2tvDYHT8GVntDxbHKCH1c5bLu63cbeCWAkGXyTfV4ZptAmHCroPbWLC",
  "key1": "2SBfFNgoVe4YhGmjfqCBFd7xMhh2TCiQq1E6peEkPA4CgVArESruhoR2HWvu1meWbwDVQdcgKL88Gpe6rPwLWFc9",
  "key2": "5EvdpGRNyE4bfjgUFt39XYyuyuBBiL9Qt4phniMUpkkztTqTnq3FfyLvy9sPN2wJunumJDMMk3QtBys4A8of6ePJ",
  "key3": "5eKKNrzqZA8jgJW94w86YiZpL5Nu2mjgruZjhgUHS9L4GAx5CoamLSG5oovnTQTuMjH54CAhjZQffNxCgWvfqhkQ",
  "key4": "2CVh6nj3Zd6vjmJNwv3BexJkcW4x75q5uPUAWs1HTwroXKSPjs6Ed3dtNPySwyFD84kMZRFBCJdFAfUVzGwNWXV6",
  "key5": "5eaXd6MQFRuXN5GaiYRKaK4PUsphFditw6X9qPj7HW2nEN1PbQxNdj6fUhET3LgjVmxHnJJwASzuuERu8HSqG3U4",
  "key6": "5B9PdbpiPUwWZrkqH8sJmUfG1mPz2VTa5fMZ3euc5yKio2GjwBCV2j8EKBbHMFAfcvHS4HeovA7sSVEJqx34X75L",
  "key7": "3ASBjs43M6vVH8qYpnvTyyPHxHJmsmddBwezvJDUmkMV2H9V8kT51HRGwdEa87d6tSxRyPEaLYM7LV8vQRnKTB7P",
  "key8": "4vpTzRGEQ5C75f1YztUuLgbSMgP1Bher3AKTVvzjLWzDJjWFfp1ueULQckksrxBcFupceqZ5FA2PXcg3xG5yB1ix",
  "key9": "4Qp8goVwPECyiVXvWk47qAyCgCXGDBtTvA9GmwZKutCKSjmBtAFYMCuPrx6BPhkVroh42tvrzyDMjbdXiarwkdbR",
  "key10": "28sSWKNWCUaU1Z4UHEsiwtoQw2xtcES5SVfWFiNL1bSNTwJWjqN2rRNoYYMYK987e4DZgPxKVmd1CFkTDENN73PL",
  "key11": "2xQGFd1igtUyMWwaHnkjYukVFdCnNzFtJ6DyUVWXoaJ8keTQqj43564BAmwoytdpdVen5g6137xhvV5YT1J1rtdF",
  "key12": "3fX9xNvs7t5U1qtNkui4AD9pYdFb6ZL1svFJtshfjeLd1YGtrkdq39Fdy9TSLKih5ZuRS1Pr3RbCrcChVMhrXXbB",
  "key13": "3weo8j7un4YHwHL6RzvQCueQXJKXBMEBKNwLEHmtTcwEKxtNZXjz45z3Z7oK3sq6JQhT1aVCqPyUwgseHxtjdPoA",
  "key14": "2Hh6YayUvVB5GCCQ67uN6P4zHAE26MeF6DUAp2DYby23gTF4CH4uJN4K5KdUoWSHd6iTCJzUZh4Dx55UcT69hGgJ",
  "key15": "LuUXnX67Qo6UNL7WVyMs3ETnYmUkUMmfC3PNYqJ8qXmqyoKbZadDTaxA3amGJbMoavAcLuDXjE42K8DdJh6NX1P",
  "key16": "sPin3iPVUFnhokihZu82Na9MM83FpG1xYYw2gkQrZQXZiUg9ufQFL26ShRGK6sKGwHkrS4NYroLkqX7jBLnk8Qh",
  "key17": "5ATcuehvQqXe7U3j7HfNeHYR7toZauFKzLoA5qTxNVgbz3xi4Nigv9a4dX6mtFj3ECE8AXcxuLNPj4X6hxPKfbmp",
  "key18": "7EpXZ7MDCa52esZpJiFDZQouRMFeWDxDaJCEVu7mUXfjMY5H9R1VgU9CS9AtnUUEr611ykiGLbeNzzCeLKdkhRL",
  "key19": "3SgmFnvmK9CJMnSBNJc8raruZ5QJUAq8KMsShUevkYYjSNCJzPve86u9dkr7kf1ayvJp4izo597xYcDhpCtuinbs",
  "key20": "4JiXTUYh2EBU9kvLkxtYZESobBCqNa1xfcY5L8bg224RpwjRq7FAyTCs9KcxaqrHC8n4fcdDHpm2biAXRtN6VoJe",
  "key21": "HA2vYjTz9zXFynsusaGRKn6LunVj15boQrG4NVgWNKWhWru4jJ63meBVs4dCnUXsdfz9vcS47FYRV8JysrbHh3g",
  "key22": "1FNdEzaXJUrcuy9VUHjeA2aYEzZy4vD2BAyJni2YzpAnfW1R9jNFP2gmAAg3ceTebFyXxhym3owYdi4ZucrdHjo",
  "key23": "33EkUo1w3xqpRYSYU1xrsHF9t9jNXFy1LJWp3boKJSCpmj2R5he6xpqnvoDSkxXzQGhLRFNq2e5adoMfmCXF1YvQ",
  "key24": "Afry8vtp7dbPNu1Yi7icgrbjePYCqM54tmP8DgxaveGPEGKpbYjAKN9QDZ5wBp1zKxp7Nf6HgVAQXKberTutMxA",
  "key25": "n3UFJLyAKhiUdANaD7a3vsXXhuD2hjYYv24Pjn1d9ZJik2RgeoMdEhUP7jN8WraoXhi2ti5xbNLN6y5cNJnXwzS"
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
