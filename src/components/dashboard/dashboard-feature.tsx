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
    "3c9k5FBKbna6tDxav5C8UJxoX3QrhSk5uJqmVmjoJRrm1SfmhqxS2aX7MDxjXY2rGcUrRqiWRtfanNGXfTBRSvmd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bMBWskyKzg43rcySpteAvKTZtFYQjDji1t6uyPPK9zwhMvDCdYYJdar2AGpTfDxzpJvEyVydU6hKxJTZUY9FfoC",
  "key1": "4LdM63s7c5V93MbbhrDn3F4KmgXAcDwcZb79d3sqpwA97yWYimpyLAFzMYvF8sAfvfhaiGHKH9A45msaR4xVudPo",
  "key2": "31Ep1WwJptdZsVfuz7WzLj3xMotbvc9oYeT3pX5Qnqc1ypiQDLBDoWRh56m4p93qun3Cgpyktmv3JV4QWkEkfDLy",
  "key3": "FhYqNffNii5kqqt6qMts99NUqJEmTsdWN2PCQfVLcpkuoPBKZwpjabh2dheBYJeJ8LFY1sxkgHPtb8QceEtsUB6",
  "key4": "3HhMKCBVbC7z9UsCQqMyjv4oYLP2JRAFTkG5MmYtfL7woZ1NHqQ3dZg32gwQWutiS2RiwtcXWwo7jHaKXXsJXj5a",
  "key5": "3cW5i6Gi6CThi2q4a9WYHJJAgajDLHWsVEAurdcWLAxDGmbFKNa9PnrD293K9EJ4Ke56L8e4o9La6gnDAN9CnPuG",
  "key6": "3v63DxV6r9qUuzsuEwywpXjvZmrC64fW7655NjRQ7MhnLKd8asvEMDwmR6RrzVti6dvZoEEEdi8Tm1B1udrdSdrg",
  "key7": "5bz2bdA3uRW8kGPmg28r7752gi7x95c5wbWpSTE6nGStDx976nPN9wqgthbsbCdJXsG9G1ttg3mGihzBTAizJ2Fs",
  "key8": "2qLTq38ZuGqbYPrE7qDgWhEzvfc1V5oWKPywUbsnAVwoFS4vTYHyHdGH5rBtE7DLP6Nv4uFinY4iN2Ctvom9VJRN",
  "key9": "2LZzGvy2xXBJrkMYKqchQBj9rxZqHTCQKPyz7HWXzvqtAZFiApmnJ4hY1y3585CbapvXukH8YmhazscjQdR5Vqq",
  "key10": "2eBe5srtjpwCzQhcNw49iwxJRHyajAt7jcSGMkQSV2Rbd4kMnqaJket1sRmRdXireh45HPpvfvhScV6cvvfJ7NiK",
  "key11": "27Z8jugToSrjqAWyb9c97t9USSSYkhfEys86FZbZwGDJPAdr3FU8UBQgtjRxeNjdYkagqk14fXEfzV8HgX3oPbS6",
  "key12": "2YDB5gMgFQgtKew59WxP6PErGyeTpAeiXfZcoFXktabcgH6XTSo8AStVP5LUsMr7axd6TYzQGnDEy3TKnmN2CwvA",
  "key13": "34yAiVHkch4x9FnEHVnYGQDrEhE75uEPNmvou2qLa6SHeLo97GV5XLo4NFvQ7uAqtHQyWpWaiw9zWswP7YrXtsN7",
  "key14": "2BNfGWpjDmo6B4FwBoz52GnJiVYrFGwCTu2Hdti97ddLL5bmashgufymWL2nhp6hWWT7MaaJfng7qRSHrMzhMKzp",
  "key15": "55ufgqNDUMhFBvoPJ6cBwNCK5XCeH1HofYdLs4jY23cKHaChQeoYVpTvDqVVDWjMnPy1AojydqWuRiBN9jUYoy5f",
  "key16": "hfC7JnSXWFJN45z65GK5NMkDmL41QhTmLpUXHaKQvGy7r2i48ZV48ndtR5GE7uJcpHFg2xDqPzcN9fJTguTsb6U",
  "key17": "4ZRFkeij1C5xaEAvjaT9uutUmv7o42apG69awK4KihDWY5J3ok99LZ8HQym8WNW3KoQgQ3xZrFd5V4E37Ew8Stj6",
  "key18": "275cpEbnvAbFP4zupoRicx2T2fZVYbCv67YzG2e1FJjnqpamJ5TZgrBSLeT9xxyoCc7neMcM7ULd9oKrbzeCWrKg",
  "key19": "4pa7gDM3TbVC5Zpeaq7BZdMuYLZCQqdr3qjrbFgdVd14eqJEPm9MEfhHt3F1f8SzJvTbCrM1LY1pmqss8fW2CVr3",
  "key20": "5uGNa7b7PxFVGzyvZGSgbUHjpqHJKy4HvBZidaLgLD2qnLhaQ5kWBj1zAw6q1NZrV2Y6fpGVv5SnkvwfRXZef1vt",
  "key21": "2o4bYojsDUgedZZwwvcwbgmWtaJm3CLHeL97HmBRcy19FAv6HrUWUMcYrPumE9RJL2hk9WC5ehU81PEJxYJsNQP9",
  "key22": "612DyDuUaNHHBgKHfigrHxers7rs9J3Aahn9gfXexs7G64vbRqQLw4ZSmDfMVPe9qC3YgtPnbEY4eP1kUwbwdNiY",
  "key23": "3hs9YHytAobS1v75kmNVLujJfAuCECduNUM1ECWSriqnN5qsovHLnmc9QP8Yn9tmW7P3CaV3MeR3LKvgFiiZcFY4",
  "key24": "KKEcJKhiRiBbDJ56MxHwE2BNFtTbLJUftHUKMJm4j4nLFn7Amcrif4LBYSxRkcZK2QbHeTMiCkhXwo6TJfxawFv",
  "key25": "33Xj1nTmEzHVxwaZGN2MVMYRXB96uLcXD2HzV69g7dhWS3cLVNREnLyUbwRjwPZyiSwiiWuyEsecoLYwMVDStbrz",
  "key26": "3SiPcmu78uTNuqb2gSFSSYoDzJXZiHUm53uRCw9Azgv8tAQJPb7qGgUoyYpgJm61QE4GUzrLB3yYcAsE5b1CmDyS",
  "key27": "2AHbdTGdnT1xVeU3s8cvCazKD4so3PJfUxJKXV9SNZbBnhS3HY2WNTtqYTub171cy3ax1USwotRohh45N38vVmEv",
  "key28": "5XM2mBtzn3EY5Pb34yndxbrgurNkdp7usdRo9Fq8o4gNyAUkvk232DxsMkNWdT1pcTWaianBhkKBR2W7MFx5Djzv",
  "key29": "5quRZUVquA9wMTAZUatPo4Q4vfUqmikxSFwF8iw8KY7R6TSfM2kDnsoXgkR2LUv9PQGz5ioGvwBfbBVm9sFb6xjS",
  "key30": "36wWy5GbHyxboekK1rFVLzMJANtfj4oLvuSeF1mqB3UJEHG5ar4e2K5Py8DDgnEK25i1p8zqMm2ShzE2KKehiBnZ",
  "key31": "64Lj6zNhRzGW4f5WGWDfR8YmfW5w86RP5j8TkMXndEXTs4G3ajSkHNpVcMvdW7Bz8CxgDps18LD5ib2xTnJoMjqf",
  "key32": "YNsVgxyn28BeJ96wzFhe92Zs93kSTngrAxnrk3PAhMFmp92N7ngUZJipsJ3WJYkWuJGw41n17dUqmc8VpSErU5v",
  "key33": "4ebeNYGwWgKtwhZbbLAqahCKidfK4uvd29CKcV9HecgXYkf7vqqpn7yKaTtN4CjYJMjWpGw5bPkMet9A2ArpRpFu",
  "key34": "VGa6WCTDteCvBJB5EbDJXBzPA3Xgmu3GUwzFUejrfweYCLuATjETKe7u5Jmna2J8WZEVwqpEH7ctYd23zrd7ouD"
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
