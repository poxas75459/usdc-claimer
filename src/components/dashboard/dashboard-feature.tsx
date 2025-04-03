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
    "2qraCKddCETtFbP5KwVDYDjSmAu8Rn8iUvAp78vYEGPqQTuSnomNCXhaZxVfuMUcx8EnypTgJkhUvmD8AV3G8MwD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VyFshybR4FvNnnx5JoQ6TbavbFi6ZCyyNPy4Jd7qxdBiRQLZjQ5PjScWiqwE8Thk3nA5KQCMCpTrfLxWB6ENF2G",
  "key1": "5EkeX57b9xUjQytDW6zUxk6g37KCxHqGBAauLsk7ujsVFHN4Jh6gXMEQimjXkJ7KACBQ4wHFXksPPvgL6Dwj6vgj",
  "key2": "3icarZ3SBaMnEWiwbLEqR3mYkFXkaQz3HqXiRMEFrTgXChzeQyatD2jQ9JBVbVgE8Sv4g9hufgVgHm3uLYww7Aid",
  "key3": "4B8a2oh4GfKRsgY1DzgCsuWEGqfPnBiHnHUn825DVbbPneqdh5gKoCzoGdh6SCLYFURdcTUQ9bz3e7JxoL1uhb8X",
  "key4": "5x52E5vD3DJPkCd1wocZgbh23nskxHg3wkV6DA5te3AfsFbKwCVsobyfUEb7kRWoT45NK5Hip88h9Xn7YuhPvVvp",
  "key5": "2LXQHMBfLs1yhWAa5RdN6aouwVJHAnPTus1WUZ4BC1wzyQGVdAWwZFQJjASZfyGUB3GqUCMu2dM4CVtWR89BFrPq",
  "key6": "o1Hd4MG5WKFWaTstgFaViWxNLzGA5qdUoQsmENAgAAjrAsKnCfdwxAZFPCsfefjjbywY8Vec7HE4UXSiTJtsUCn",
  "key7": "4W93nead4pS371aL88XUXeAoAYkBqdXZEXaPPiQYhPLYAUXYsbnRkX1oouMxd83EYH1Vw5dM6zrAA5wM4M6dGKJ2",
  "key8": "5ZUHfc4GDPm4bcKg61q9dafyYGxk5eTLqFtQRT6eQ7osF2UbtPeB9yY2oU3XtbYtQqcnqmuJe8m5NVqRfjWEu9FB",
  "key9": "4aJFfWeFz2GXVZS45B5N8e9MBfBQmSWL1fK1tHqX6Ct4Tgn6bGK8JJYHY7DUuTw7Z34dBVGhx1MdNeHSdM4CDmLc",
  "key10": "528MYRc7HBxnRmfFgd1NDouXUiwSiureZJw5btX2HK4tWzLnajGGJhbDHC6vTpDP7dgGHfGfPhaAaQsEohyLkoP4",
  "key11": "37QoKLevCxgaMyj8zCpBn13g4CtHBj23p4ZZj1iRk2iMUb2uYREm29zGfutBZooh5ggosTvaDKsTF28rGq7ijTju",
  "key12": "yrvFLAkrYKa4cGywQ3ft2QJNTAXuMdL6JmZXg84iUgcjiF7AA14RrtANyS72jRjL4fHMyyqxHxzfZ8mCTxAhGoC",
  "key13": "5KgnS7Nm9eyYSP21WGb6umCebLusBxh3L8qoVkQMfWWCEZ2mitFKhYk4FEhBZFNTzpeinxCBgY6EN9VmSLXJMPzZ",
  "key14": "5fT39NB4SPHLTNZmojhkGQZQCMCAsdMvZM9uQe2NUCt6vmiSoshSrwmQYcEYWEpGy7NdymisPpmjt9c8JFp79Kpu",
  "key15": "5UFsFuSLMmaTXfDZLhTUHTkPJ15Av5HXwPA1EBc224AQS2vnG5Pp9cS13ERvXYoBwYfmqcQw2dWEqUfNxC56ceXK",
  "key16": "4QszCTc6ZsxjNQn6HynsgiJVNoaB1XzonLZRHYdMYs1ShJjm5KgVynv9XCbgWvmuh9mNpfsyHj8rWoDzBspwfbMd",
  "key17": "yU2ghLyftQDRc9fYDrgQnT97qc3zvapB2xXLjBB8Koa1Ja8gxruuSzk86o117MvTFU8KyuoRj2TaPdfnPM9RKcU",
  "key18": "stLh78xRZokmzYAKmJENa1HFnCQVS26rkHmqHYeqx8jgqn8TdeXe6UkVmqPoHSFanBmmq1ZmetKD4wU5Nq2CJu6",
  "key19": "5BeH3VZqK2998QXGdcDWCpd9a6Tw5h5UrmeT6GYj19Gs7A4ygZMG3GtsegfA3ET6VWkYnC46tSf3MYNxHyLk7M7o",
  "key20": "TmW96Cy78mR9vLXNP4oZfB8LgWSLJ8Q85f2sWZYzAoUGonJoqyYTAnrwgaYMsp1onMjtFmaWkNKynjzaTcW6uEB",
  "key21": "272oRXv8hbuWGkMUxZYzgXDVqFUrtDdAkznjb1opRs35riYAkoXbQ4QzZVFKFhUazGTzEciUXQuimhhYJYrmV75L",
  "key22": "5mbQFGFirwvGsMkRVc61fci5BBNeBAFVp8rVNmixfpabFN3y9J7CQeYzjUFsLJwpkmKzpgcedoTKCv59JAEiZa7W",
  "key23": "4gcc4WMqzeP8933btu6bcPq8hKLmHSJPfny13Ycb18K5XxYqqBCxXdxyH7eZBUp9irybnrVgHA6SDN6aM4qVpjn6",
  "key24": "47KkwHPH8vtdSfm7qSFPxCb2SweacwGnQbyCYo6Gxer3CHrUQfCNTRSe9zXd8XZbtsqT8ZpNKd6Y2DYCGAD87WNt",
  "key25": "5Nyag9n6sroJTx6L5TGDoqhqmwThbAWEkThd7who5ZJ8zo9ASS8m8ftMh1SQxXvKf4Jzb7JWacRtbTr3wGK72w6X",
  "key26": "32Wd17p9xLuvoNPH4MuUHZRUhcGteteEmn5BEUG8f8ym1xUD7b8Mp1hZUckpGg7XysZvFFo5QqsFTiu8GxjxzVX1",
  "key27": "4aBszxmLCs5EwmGAjGRjjttV3VZ8VNtoNGVppRPuhKUAueNmjnFp4fqLehNE8HLXNjYCwhKxuovfJYqBk9tfaMvn",
  "key28": "LoLN6QXZsjRkohfw1ctExLnDcqGue7X9mNSjL5vtKrE28usSTvXfgfdoDtaVV1wePPbSNAri2YN5kzDC5H3GENu",
  "key29": "3Qbi8KwwXCEqfyhH2f4yfVvfpg8Ly6tonEM7iYmvc36K9UUA3u4Y4qBzxahPd8wnfnd8yQUwWCnJwAa2SBEWWVcQ",
  "key30": "4eJ9PwXNXcrW3Bg8boKkRXiwVZh7qZT7VehUSr6SWCN6soz9sKiFALKL5zJa9HTxc5BrPHKGWGyAi8q4pusUL6sR",
  "key31": "5ZX3rJ3e5uVvAhUQitKQ8Yz6Wo9BwcGWZSgFM6SeF96JWS9eaXexX4SzHZApKrPetfiVWWpxoKox5DGZnP4ehtE8",
  "key32": "3ahPBvea5WVQBAYBcdzcV4K1Uzpwbu6RY9QDzsA3bk369T2pi8UP6DXNhRMzCjp15KXqXfTom4edKsaAFqXuNtSd",
  "key33": "4E4ZtiC2k3D45SVaNDHiRV78JqypYiiB6S37oVB4ZnsLTyqqRagte6UfEri8zC5seb3d6V8mbfxrgGBgy62RcwoC",
  "key34": "3dmwRZ8ZWxnbPkyQdsP7wC3mjnsrS6p39kfakaB7WCXffRZeGHaBuGEERhSU2airr7KeNHG5JYApyWDJznom6fnR",
  "key35": "2FJRfGWkq2LYucxDXhUccLyXN8aFUVXzkkfUViMWkL8boTXK1NYiErtUSUM1y9RXdKzQz3hzDFkXugPAD3frGM1p",
  "key36": "5LTZMtrUjFRRYA4EVRCfaDm8wWCugsegVAwtviMsWnEVezjoDtfksGFSD6vxoGWBNR8rF23PtB4wfF9p4Rgevy79",
  "key37": "3YdxQZEiPGrn7sHL6eBpHv3BewfgYtFeyUhe2mGkwsz19bQA3yjPwnoExuVBph12p3eLP2K7Gxs3tDCcPavCDvCk",
  "key38": "39HFBjoRVpzsUK8jYdkX5NECCBZs8yaJopssMxj9FmKYodLZRfBGbXW4N1EjMX7WWBSwt6fdCZfvmXKm938F9uLJ",
  "key39": "47Xna3rJPG7rrrLCR5HGhiGWhvGrfAwcHLRdamqZ7WFfvJWXF1eNnbJgfVbkRoCKkroheZmBcGUEVEQmvNUXwije",
  "key40": "3ZAwR8pE2iNhTg2SYS8TqQkJNX9BbKe3wLzTP9fs9adGUvrbP9i83tbLBcMBxEPH639wGn77AJW3iwK5pVHkYiTi",
  "key41": "4b37CSZjkonAbkKFoR26Lw3xpZixr1YvbUi1b3jLdqKyBjoi3GfgCj8kT3SpL1bTjyATai3ysg2pWueep97sDm7X",
  "key42": "5kvW4eCbYngNnumGWnh1GKCLCFDtkpMcv2FDjRunX4HompYsNTgVzKg31beaenyaf8NC2kvv8aDm2yAPux7yJqhy",
  "key43": "4ZXY8d534HrP3RZWCXMnB64V1k57vb9WQgwUCCcQGdEzdYWiKL7Qm1DLHi3VbQiMBq1t3YYFtQdpVpLAiS58tzQc",
  "key44": "2ZHkiKMm5UH3o2wUxoMuMgELLrjZtw615FBYr4LyxWWeL6V5swZM8PjAgex5bowQv69z9KXrmTkcX2v2HHbEhYTZ",
  "key45": "2RWMe9SostJg7w5BpS6iSiBFRR4yGgDPRPLpFKwySj9a2kmQ5XDLhB1kuzsgdUpttw38DzpsmcpqwsBxeHjiy9r6",
  "key46": "jR7SppKn3TXpCP2aEfBrmtk5LyNFpcGVegqtfyXDk6GGA7wDkfV85x8Dje5htXqhUy4djvG7GLiJrEh7eZ4iz7b",
  "key47": "5pbR3hjBA9Rywq6jx5JXezV47UxkwiqigE2E5Ba5R4rUWVbZUXTWQqjt9KHMHFEYP3Gn2UJQnYcdEtYvEUW2QcqZ"
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
