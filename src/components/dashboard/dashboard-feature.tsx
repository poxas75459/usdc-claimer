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
    "4UEcR8gYurPhGqLCkPUi8ZMxJzkXJkeRNLSXB24CYqjfVRSqqSAmApHuqECpodCKgRQGLHLNP1drEsFNXiN4RkQM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "dzQFp9LPSw6arfjmnLV9ouaQeTA2ojyfhakGVyjiHgoszYvepi9KbW9qrCrUWVYpfWfSE3FzXSFx8wUVKXDwn5T",
  "key1": "2AKLkPDrQeTso3fYoH9wizZeeSHishNbXbZwdcpywV1YM4TWYQjnH1rERSkm2Gg2EfMVptMH4Rk8D8FC66VPFkFU",
  "key2": "4jnA6rSpMn7BwbD6CYrbErg9ncA9gYJEF2a7eLXu7wGt2ERM731ghfU1umb5Kr9uwErg6GzuVU16GtDXj3HxfYkG",
  "key3": "4yFhDP9M3rEi2zRaTJCMX3FHVWpvnnFHJ25QS1pb9WsCyDMHyq919nsRUdxi6GkQQQYGxMVJDjUfdpQ4dcWVpxza",
  "key4": "4VF6vvnMnEYN7vzHnBjEVy4hSqd85Pduaxqt5aXVx7KLjMqp7xxGFHR6VC6rbPfSPPhbf5rUW8P5KUhb1t4eCi94",
  "key5": "5tDBSpTuLV9rfnwrfbLjEsHBriDZ4vN7buYShe8MFA4dHyGijDTxMcvLPCM4xEE1KexooCiuJxseXDyQGM9T1Fzk",
  "key6": "22AxnUpRDSh5KPjAWdwfQ98UrWsURzrctMpLfatZRWsuLb91zXWCDGGuHZwxgpchYXBhtML7cEckZMpm4enk83Tq",
  "key7": "5teSM8eK7bAa89UJnh4YYH3XZatqUuAs6P4yhaRaGa8VQ49SKCGFZT59PakAMMJ8z2umc8vcsWZKigsTLsbk9eTp",
  "key8": "27y6rAqDNTksdEuETcWVSsq4wJQV9FZXjG73bXAeP6XZY8FtxVwjmNQi5KqND8cnie3VCY45qiybda8Tn3EVVEYx",
  "key9": "46vuxM8sHZy5owxwfC4mxYsnoQvKKyMaoHKqnLcmJwAfG3YxdWi7cWt3pbV2WuxvWDXcgcF8LzUMjbpxzBeeao46",
  "key10": "5sA3SdB92pPKSfiLxAo3kXWJyzgk5QqSS7ZyJmaDMaqge9cbBMPvWruxekzB4hJEVzMuUYAJPnd6uZVbZiUNmegp",
  "key11": "uNnejQKebu6DZ8T4UMhfhnpVv34DEwGa91QFQoe4gZoYFcudpSSgo8gfoGvo6KsuATMAF415J8XE1YyseLuSgDu",
  "key12": "5uQi73RCkSbUkurjYrtmhz5E7BJKAZpVS1iuwjiHjExXL11ByTAywqQTxYdxUuuvybau1sEuXofWNE5UoqxfFNuL",
  "key13": "4aZzmLBiF5yuDjEs2G6tEH6ecTqwBF2BVzyG48fQGQJoe4KiepUTKNEqKcFfXWQCaUBFqXk7gR7z1TFzxdC98f9i",
  "key14": "4xynRsue3km1L8gGpn7jMn6ym7cy4GZoSTHsgPseraggtxg9vUe9bmKBc6zDRgGbsxhBYzeJ5VzsHCKmjAncRhU",
  "key15": "2sg6dSRJv8rMKy1jssPFEb342EUsNHnWT382RfPd1UZaVZMGm7mTVAoRSuj6UByTVjjFPpoPqxcod1Kv3yvufaMz",
  "key16": "4kN6mLjnApbpuvRx35Fvz5HsFyDJnes1y6XFPNZ1gsTN8oBDTag7kDTBMjtW9sNtYQMn9mQ1ZSX2G1EwZczDzFRD",
  "key17": "5QrNNF5RHJTCTixm89XodXZ1k1MpcPy1mdsPypsehydDpoLXA82FXo7Ao9Aq57b3q1VRBf6P9tVEE1dVgKaPszZz",
  "key18": "5uapbM2VhGLqRDqebeCKbG6Hm7gCVW6x2dGB5FZpfLgLjjniPPQgGxQRU7J5Jahtp2BGX6aTgQis3bMNrhDBBr4h",
  "key19": "2sjHCmTHYDa6bM6uJqGr1v6pLHLkmJTHw3Q37VKyGDzoCha2ENNA8TL1VU6APUuqi46xLujvHN1S4He3vCS8KR7W",
  "key20": "4vPgLJixx4uPRLNVM4LY4tvobWnScpErkpdCp4E7K2Sp23h39iqThpWLqnLBNuNpgC1GTgvLuMb2A1GuJxWjhwDe",
  "key21": "3LuJZahUJrS2MTW3Ec1PdYz78qXFD7ACvMcQsjmH59idi3cBoRpTyJUWHFGhpyqenSnsgHcC3m2nrGNNsg5Li89R",
  "key22": "5zxjeFPEcXqdavdtZEaEVZCrsL2cg4L6PG4T2t8XVxcfSqR66mtbzbQePrBUyYQhyGCkanyv1HvYGKxg1fQpZQVt",
  "key23": "5FJ3B1xeAH3ZK9bn4vhvLtZ2r4d6nVSoSJu4iU2KEBBJmgXV4SX2sF8rzJcvm2biZJLDELUhuWhFvudMoyZNg6M5",
  "key24": "3QgGF12UCB7emabRWYvvZvajvSaHPpCMKM7atVkjpz34ZpPUnGdtTBReiWumuWw6Wn1tUXgPzcXatLry14D6SdVP",
  "key25": "51ejfzpkrsKMMUeZsuN6ELEAfNrPAaTLL4eR9XVSa1jFTebzerzzimdTECdkzanj34cwHPiEWzB8MvqvMDkEmiTP",
  "key26": "5o3ZXw8GFShj9RCKVefEw2iUc6rYurdAswnVopLm1sJxroPw7m685B1EfZ6zh9p6FCJdaGao6tAJEoWLhszinmhX",
  "key27": "2EJSJ6YdnVcmdLogTWtjcznvcLWxnXxBASS3WZbJnYkVPFQx8n9HTtS2o6PRutkmnGFbWa5ke5wZbcMtK67aSyu5",
  "key28": "4nc5kD7Sw68bdYoDBAqWhEVRuWzbFKGV2bkPzZCMYxL5NPmwqwdQZVNjTKagkQXyeWz3mhjPA64A9orgDCNT9nvk",
  "key29": "5WBo1V5px1uoe2SXdCooWfNpY9ZaTWnrp9oHEJQUssUkyqbmfQe6hdCZyApWxhUkkgWo7rb3Dbm8Ag7A4yXKj8pN"
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
