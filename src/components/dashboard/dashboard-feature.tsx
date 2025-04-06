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
    "A1JQUFDQz76EhUyZfPp6jXzyizxmUWsWNdq6QY1phPdYKCuLiz9q2W9c95wdHtDnuMFkbmheMfzX1aBcbesfQa9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5p7GBLyCEMDpbW4irhHyZfuPcMLHyErXtShAnzpm36NJuViC5VUegXTG1Mq8Qcfgdawo5K3SjKZjvpcjE8XQ3aFx",
  "key1": "4WhDXE5PUD5FT3xeJVjbvy722DGwDcecuKGNsNRtCGTyiNWSsCvSaxozR6NLBc6e3VZmy3eQBrBiWsHhq5jnmnEi",
  "key2": "5P1GHEUsnbKHFYqjp3LGdqp4Nw8UMyPdScmUjpEd5sAYU6P81qb4AZAZzZqy4vSdSEaeACEi8e42qQ9mmZesvr9F",
  "key3": "31Wr7tgoMmF89v4AvJPrYmS9VVVydDpeduBZXMBX1jL2XS89XZMjzve9XjCsTxByJzZmuDZBTNEBPXot4gMiSFfT",
  "key4": "rU7WSAAPi1VXTeYYjKYSuTB8kjmqZnAMcnu9R8XhiuWrNSexSwTPJzpJmzQNPnBUEFfaSJLVKEffcXTWQhQ4vvP",
  "key5": "H2hZxfQCexSthFNuMNGS5X5Zk5AvXR4Xz5br6BM3dTPoeffFfHnEGD3ELm496VHbsjC9wRuKi28qkY7vi9VfbgR",
  "key6": "4XLkvMbN8G1SzWBFA94Shu3SHQKddQDs4ckM5oc1wXXaFLDK8jk13L5gjWJFd4ZpPSgfHqcxYxCTagda5xn9bRWd",
  "key7": "449WzWSUGZqgwb9KCDdHoVzJBANJyuwh5g4XY6r4GkiEmg6Uo3RmvKRfoWj8jLnygpv3r1sTb1xAwieVP3YXDxGP",
  "key8": "aSRzARGAKymdkmp43Cn3MJk2gVoAe77rxY9LcQgFCKWZfgcrUzjKG4Nn6Mkovae8bwMjKWfnbDLxXDGvsuHdTv5",
  "key9": "21XPYZNvMLD2xWM22vfsn7oPbUzCFJN4ktR3YxanHJgud6ZvNwrnzhN1YLh4TcPQFLANmQ37kC1NiRamAfgAr67E",
  "key10": "3xojyBegirsY9poT1qP1xAxVBMDd5B3kfeDJAPT8eKSecbWfzsih6LuKj1v9LtLKD7ACF8M72dWym1F14ra5tYjJ",
  "key11": "zxzjza4WuQmNSCwiBvjjhs3TGUhPonz7UgD5bcKdY775KoE9dipfSbs3VkPH5p2c7zVtgatb6R187XaqygFWvmC",
  "key12": "ZvdMbACGmubirqrrpzNU4VSJFC7XEzrTbW28P9ETXbYbpRV65vnWTwqUFcSmq8wC7RqQA99rT7RwQZvZepK3ynv",
  "key13": "31d4heGFLSJhez1iugVCwr2ArzaGmqvXQdxfLNSuMnJtimUsKHkYMwTMFibnfFmjEVj6JUqtQ1KqAwaDo9UiM5vq",
  "key14": "4eDbGwpEne3jc5rFB4oECvM3kqWrRFz9WJkjaDNxRywHTH3gHmzHuuxzzb7iUvTxtxRiZnLHe2VacdVwNH4Cp72C",
  "key15": "NDfr4KhC8KJAZqAAfByoA5Z19eh5PKxTmoX7122PH26LReES7bFVRg3mi2GoZSGxkga7M6MvCYMzfjzLn8WpVRE",
  "key16": "2nx7ohmJ6djJdWKCeZ6tcckgaXuyKHwN1RKCwTvnq6VZiaEWHwBEssrsnCnSGJKjCWNqP91WK5XEXEN4CgkVbVBG",
  "key17": "2wZ1at12s3izP7czwE3waVbZcfZdisDjMfbTEbq2uuq55XTFEtJQoTxTCGdhFnYxHm38dXy3fuzHg8xVnsm9k8RF",
  "key18": "28xXKXQN1KSoF3AQWcczEnCfvV5XBLwQdU5WTD6U1zP7YqcLukR457pMuznHsaBe19Ni3CM7tuN44zsgtJJvEeEM",
  "key19": "3cYVo55HMbDFQzHuQ958YJygh5xAHX1qkVqwf4AMLwNcxd7R85ckNSBzyqXx5zQ9aQrHinRReKByM7LREzC8PQL6",
  "key20": "2ToZu43uTUj5evSfc4mNYp5QMAPh1ky9kaPwLr3hQAxW9hELZKSuhYHvB3YAJy2pAoGxHmzZaivW4XVx7ZthKAkG",
  "key21": "3pKoR9XDvtkppLzbto1gUHaLyyfHbf6d3tBz7TVFg2ZxTTTFwMrtPqBSFP6ADGgNgmMgYxFvT8jxxdvi2xwDJ2NB",
  "key22": "4B73XNTpok36XNVe58Ny6xXK1aVhaE7iV4XJgfSLmZVnaGeHwfPxYFKd4LrdmEscUGWLHrNGGkLVVxZWk3YUfXj7",
  "key23": "5GBb79QMYfn6hd32xqgp2RLFfwVvwnYFG3Azz6bLeSYSLzAsLweuRZTGjj9sffAmhrGCgEfxx4Tz7ETHj5cjAG1f",
  "key24": "5DwLJAwV6trmnLos3Fg8ym5Gd5YhixtyZjBxgn7sw3qNogDGQhqvUea42U1x9EdMshv6nVH8c5j3HzXsLK2uzaZ6",
  "key25": "5qjAq4sb2bwmMmymVyWqQ17axSgdBV54ERpdQvB4QKBKket7aVXvbEFdwWuyphu783US2bXBRcP3ni9c3RWKRRkU",
  "key26": "5hWgBnPCfqUCKxbNGSeEkKWDDE5QcbLKCt8xQvM7ZKnFn61uZfwDdeYBAu4vpRSPPZV1peFXfoBkU5qPCVL5XDzv",
  "key27": "vREqpSDrCDQqH1efZFwFeLHv3DNG3RPShfVVJdc8h793NJkCkQ9wYsPVsYE9AvSFDEuF5T2aC9sRv1cqcTq6Tp8",
  "key28": "5pgzHL2h3ggAA3ShzUKQ8K7atCyQCTkZamP81wpWX72ymgz2HTbXDTF95h8xKtwSvV9ThEutvUiZMeqhfhwNdM3b",
  "key29": "5gSSNjXcCLcGKsRxRH1j2EAnjrEz2tvmGX64mbnXEn1F348fHdniyAwe338Jnvj5bvChqCc6P4FYi3wQ1zmFWPbK"
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
