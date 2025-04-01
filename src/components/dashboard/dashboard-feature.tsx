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
    "4EU2sNZ4G1mcE14WLxvF1g2zjYrRvwSDEJ2uM8fgtKHbrUBLmyTfwnN7W2irvDyMhdwnmRuCr4QzqTghMoeHn6gL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4UgRuftJ9pzscqst5JLPCUAg1FEqtAKmSZ6eEE2aur3D49q7sHRrzSAnemD6tB3926YBskNAsMTwm6uFG55R8Nbz",
  "key1": "4819v2ikFj7iNf7kLqXKLhm5rvx997zjWpWkx7MtUgnZrfrCEQUe8G7nmp7X8aKyVVCf78bGDCsH55GG24NHkafM",
  "key2": "5UrSDtS52FEcuxaKoQsnHUX1XV9ghCM3R5DVeNUJS3B3h9EeuPzjMHCAauGCBxA4jRbA8aktkF9LA2rfPRmbabng",
  "key3": "AvomaUBHq35PqH8fwo5s3tWRNbT5z3kcDib2DRnqdJBL7phgcEsgTjxAbmHCo6dy363huZ1fUVVWjux57emyazC",
  "key4": "2dk8CSNSxPbGAkLzV2rVsAigXQQaKWUqu2FZKhmghSZXFmxnpkv8Vv54XLbciYeUytqAj4Byvora85yWoFbwTYMJ",
  "key5": "3gbJi6GqDtYj4ErNoiTMu8FgrMq2VYhNgawjZrwtrv48ARqVjC7LjuKHFpF6h6QToo1P2uYmz4EtxUZuy4d85Tfh",
  "key6": "qDAZaCCFpCSviRHNg19zGTTutF78jtDer7KjyuwVyhGuFkCLUwqts5R38kHETPJN8oz4PhsYdo27t7AVDyLs95j",
  "key7": "3T2Qto8syZpeqsMzWJMN4onyfx9egovgyUyCb8fVtiwSaCKG3vMn3Xxvjh18ZDFNrdmX9ZpfGn8LJAx5hFSKJj9S",
  "key8": "Wk7bUjzr9NHeVRDV6L59vPFNvsNHUyLCDAd3zpqav38zhC6e3Y767KxXezTmi32S1daJYF7ju9guYLZzP3Xih5K",
  "key9": "GL3hLtxN1mhJ13kq3oLaX6UGPPrj7cRHRVhzprRmZ8fsEmQ6AEikfx9QZSspDuSbNhxV7Vxc9Sa4fSZ1Kd2iaiW",
  "key10": "7A1N6ASWu6rzoRstw3VXm38e7VBDFnCmQmUpas1Qa8sCm1Gp1tX9uHBANkrWaCrGdQ2h5pKQwredaLbb6m8H9AX",
  "key11": "2J7uen43Nu5ipsNPiEcSR9k2wpxt6tkWhNs5PR7bn1H6soQs5UUzFvWLwXcY59RypD2tu3k5NsSiV4j6ymeR1zB7",
  "key12": "22DD4suVkLMusUA2FsdLyoJsCgpWip5nFCBFtr33z2S4tGLyGwr1ebYHBaw1qYDA7krKYbcZJrJzXeMtaBAZ86eg",
  "key13": "cNxMhHqrqnssSjAsxSitakbz6GZQD6stpDWQR5nWD34taLExUn1fLzjw97jxZxrxGKCF2vdyTG599td5RRsnkdM",
  "key14": "5dAe2AdA2Nt9HSvTsDNw3Goae3jTGaVNGR616QpaxHByTJDViyhrAVLzXeMTNeap8424qH8KLBJd33M3VVN1ESoG",
  "key15": "2EF368LEsLgQT9pWbak1NB1n9ZrJsYubisVVVww6rsxYJGFAFpq2oThcmFAHmVG97z4UjBZpvtfL7ikVDwGGomyB",
  "key16": "Aukg17AbTnJmkR8hYbsWBZExZXugHnFtbPygyDtKMW7Jv1AH1zD6tzYE1Wo4XD7FCrSt5p3L7Kz6b61gAWMLUkn",
  "key17": "cp39dg6azGXSpEXBww65YJtjMbdCjpi6QXGiYa1Z4SqYVY8Up66QQYDEDKUVmJHUnfSroPzTTkwQr22vKB6zRP8",
  "key18": "3C8jepZJBkapKYpnedpiLmzhpRhAEPG5TVK1szjifnWDzGHR4DHuRNWH2WWfB6vFacDUDH6wgz7qBQLJBqZNUu8R",
  "key19": "8Z6VTFYV4t85VbDsQAd27NN6FhykHavFWJ3Wf6jAyJTDQzMCtEXX8VSgZuYSow5XY7AuRs4u9LYTE8j3AGj2dHq",
  "key20": "4rXw4ZqJqodGw4GWckugjm5uaJLZ8XbhRXhhDaAGkhgGtyhxhnZz1nPEf3ESTtxrdCHcV8Aigp524MVdnrXAqVLC",
  "key21": "9ya7Q4RnH1Q3gvEu3NfhSxL2PVsgXjRi4gEBJR4Ds26yZddFqAc9bnDjZnpp4eVDtvyjtLnpQvSPeg6kMBGr8P7",
  "key22": "3KsUyDba9VgJHAoY3W4YFfbpJ7hBCotUSYJDb6iALpHfd6hqdtQUoqpnnyTecjudFoeXW2K2CNig71UbwsnfZ5Az",
  "key23": "4hyBvvbmBYaJHXoPNBksj9UFSShdv7MejUsZSqVXVe2avt3eEgFUPypnx2CoWQVznW586gDEJ3UY6hoWfb3gx2HR",
  "key24": "3Z5QQa5GRoM8ZgrXAVcaWdTm1yySjJSB2VELVHfQ7PYVCmfEZH9bSZWGMW6dhMEeAAv81SBwGtkVpgwsbEHobnDJ",
  "key25": "xuMa52dwfD3f3VVpwmSREVnECi2tcZR8fbRrF8vzWKfaTsreeDUTnADcCbeAUx3cpZ1Jjyb7EX56dV8S4nnxNmn",
  "key26": "5JqzWoxtm2jsS5npaWgD1LJ3oXZYc2EQyRW55v7XFUxV22he5TaPqK9KbaVgVDKLr62f6yLSxKKJgTDD2tHPMQAM",
  "key27": "64fJ939CFfx3zmN5z8RxnV1CDiPwGSTHEEnfo63sT83e4Aec32K7KQbP8BDkhMnp2s378qzQcZVRDb6BehJmthdr",
  "key28": "3JB8S2D5AokyAgD5WeAMzGEATAwmCaatYaZEHAJgfDskyCyoH2HJc5j4rN5hrJKxmtxwFYdAhkJxT5VKM6T68qT5",
  "key29": "3ZPJsjgtJbnh8rE6zywwQne4UUYvtDdcanZXWMxHQpYNmwivHBNv5PYGTaLdZHWmwQxDtirssrhRZoeSJ3wdpBVb",
  "key30": "3Uk4LaXYYe83VjB94F5Agmtxh5qnYuhWGD1CUUHykMGaNPJUG5mUESkxg1S19vCq7csvBf9hUBsW39P57pHxoFZp",
  "key31": "2JgKpdX7hEPnt4MAX37ubPfrzxXL3FUDWGu8sk3jbmjdbhquHqz58gNEyTo5jPNDkEfu7CRMKjpf25oYMgqwdnJS",
  "key32": "4xddDtMUTvCZ8kWeKBQsRgdB6ecVnZ56c7sF8BxKY9474FG4EggNkiHhvtP3BNV72WsG7pXqGhiv9sYdnbLxdShj",
  "key33": "KiGKqbJqddQkLNXxq9t6tdqbGDziLGG1DfLdXpGjBkKAA7LKjTUidaeQk5Kk1Z9BvgafNUwLgjau6yxvzLtSxCY",
  "key34": "58bpjDPo3ZeHt3Yygrjo4LCxfFx1X8X833Mfdbn1WVJCDJ2dpY6GeExuw9fRQrimtWd4KvRg93QSJFjvbDAZ5pn",
  "key35": "2TLG9FT2mV3xyi8Z2nYpCAWmZGHuMgR8JBXgsGw6HUtzAcij8jzyFj1s7QnCX1CCt624TNxLn9N4f3iLH1m1nHud",
  "key36": "4Vqt5uxPPwyjzrk92sPpZwVsQqgkaAvhsL6zWpy4jy7YPuXhcqs2GehaAR9pEuG9en8h1gqzi3sLvSrXad7LbPaQ",
  "key37": "4iG6x8jmiCy1abuFTpqMNKbreQQeaw71v1WkWprCjonVZtX1wiuFWzXZ6rgGyYVuLJezA45GxF5rYb3xRZMfwhW9",
  "key38": "48VZf7RAA8BfCw1ZwZcCZrZXdxLWuv2vpHsFLqHNjov72mh9yVMKvmYHfKvoy4bEgRAaxnMXrX6eH2ebSzjscjxb",
  "key39": "euRVXVGEdmA1iGjZhThCUBVppN71A5BLR9M3kAv4Yx7mMx6esDGUXJ68NWcZm8KbZyonNs19YctM8ddzkPYAKnV",
  "key40": "4642k1dc3bZ5Cf7sPNcxmWVzeYTaRTm3hDvBvaL5TQyajoQ9weWWuwpFGDwArLxZHG22xEZ3TWS1deAmTYAXDeLY",
  "key41": "2KeBPwFET4F4EdtgV4WFr8zMcyYo4ibzzPxJ7NByFpZQWN9x6WYVR7Ya6c79R2aNCcrAPStJpzjqPrZgW71u6hzq",
  "key42": "4K8wCgR1CRWYR6MRJ45rDYngxi4TXEpv9kjNBMhXFwxHx2VHukTPUXmCu865aRic3Dm5ftDzek3SkUZWJLoqGvQM",
  "key43": "4MwLh5oTSfu8puL8HmBi1EJp97mHSrrur4DySCs6RN6UXygt5yv52bJaLe54kRrcfhX84rEjb9fpQrAdB4pUiHCm",
  "key44": "2gkxJYmu5pnhCMHq255gCqnuyYoh5qSowcUH2MdUTTCjdWk78qFau1WGQ76knqK2RP89K46iAqsJnsCK6hDvJX9K",
  "key45": "4w4gficSEH3mG1VQbKtkDrK9b7TX39M1C4ujrrer26kyrjFCgqSeEhWvTuRTbQtkQwGc8ioh5xxGC51waknx4wHz",
  "key46": "3cvYitp78FvMLqHp8x42uGNUwV4U6tJCh5onET7WnhK69VZrRkAEHbUHKD31SRY53AQ9JqVEDzpXM36XzCkKKpmy",
  "key47": "4hw8DDuKQ6uUVStZGE8Cj9tTjFwNF5fXNEJWfE9sovrjvXWU2RRkWwtmwHUL7qwqbZCCNe7WGNMAaVxSsurrfAFP",
  "key48": "2J8qdyqn41fRiR5aJeWqfTBL4oD9X5PCsJ1ZDKZRdFAfj461q2znYaX4DWEbrE3qiG8kBPTYeSxs4ScDVMdVP48J",
  "key49": "58PAyuJ1DK4sbDxDQpHgp3FbgfVkniKn1LRNvDgxNzXoTVTeWy73nNSMiKFhUaRzx13DgiJHHox8KpEa8LhM2MQL"
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
