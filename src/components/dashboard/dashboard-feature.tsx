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
    "5ksCQxwF1PTrSx8SCd6gHsxXgj676dLtxtHahesjPJ62HUdcE5figVppd4rJvH7YbcaMfFStAMnsRjPziaJ7z2aM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3nCWdYBTywbgzhKync1AKie8LdmCC3wmLggnKSEjXTHU4FFA9sYzRM7cJSeXCtJueaqEpQN1Kzom8SvBXFf1BLjY",
  "key1": "CC679gCpzysvcSsjPabjtLUTYngAdLEB3eoFUb7vxKiRuDLvAQgPNYuGsJYbLggbnR9vD7yzJBPPTJa58qCE64N",
  "key2": "5SB9j2WDsj2hxKpD48nmHj9Ek37QbwGQA91zu3u2LvTruM1BbJd4yHxKRytxv5EXoEoWtP9cB9N97iveudG3FEFU",
  "key3": "cqs4psxxjkhDcPyAKUmuddetbiSEADtBv1uTykhnRMCK8Ktw5buySu7ZRryQLrF85H6jFd3xuqTtuDLU9hJbycS",
  "key4": "2BpRNZh9qD47GLdzUkKPeU6xtte2VJuEWHfbxt1eK3tgNA2P8SF2CaJ4NLi1mHUtfaeTrNiuTRJdnrD383xGKGkX",
  "key5": "23UQrovCAPfTQdkSHrqgjfiM21fDjnoHiPNbtGAGaxm4QzUnLZtMkyv14NdibSjDuiYLBp8ZSqDjj2qEGyFfY9tL",
  "key6": "3PWotaEedrUQn5NrzcpkAzGnqiWYaT17V8ffuMvYJTcgj28XKwMc4HFbY7vD8ppX4EbCxE7m1CLmN1DwnSDfYN91",
  "key7": "2nTvxpoifB4uVSfak1EpWuW3vDZWj45b8gBcVz4bdMxfK3nJ5Z2L26E198ASo6jMfSbSUCKCzKsY6eVrf38TTthq",
  "key8": "3mgtazWQzXPaEJSyLS2YLc6gpURTbBaq9rhJhh9PEsHvioETnDyQYbMuCuSFshuhhuahM2AfsFG4asg9jvfFgLEq",
  "key9": "mv5diYocFiaxzX26NsheAb6zfjCdMZCrJWtKNUXSTkKtf8XmsHUiGvaGy4r37dQLHBtN4mvzBmXu93HyP7xVhqZ",
  "key10": "S4gJDvhdDUWesWgX6hMyjMVqGAXFQdyRMTS6w4yaM6rgHXZEvXW1Ms9W4GzJGgUnXtNz8PjCF5SwG5idJqrm3Rz",
  "key11": "NUYRqexUFBwHVMGNyekbrS2DdA1nGUsLof28DavF3EQVjhziDziMHqQuehkTLPHaU7ZN9Qf1gNLhYkpP6s1zH8d",
  "key12": "8epPwqx1LptnWZyjZVFjFpbyUAyVVBDCgtVQoBQJCMoMRxajiztVPrwKSr6hjkjRp2WRRkpkME9KNizBiznkjcG",
  "key13": "3iVht6XSikKNKkp9MYEkPT9jcfzGjEv5gFFHZCr1J3jFBGpkjMAELJjmfJ9GqCQ2erog6PT6krtVFL1M2yM2DSwg",
  "key14": "4H319zfjctLRfVoX7FsBJVfDFoZrWwuqJkBE3Q6DmaCxB2Voxw4DTDqcb2LFH9q6H2mN7mHCx7a42drPegotvapw",
  "key15": "2eWCynzPEQKY46NeKsQVHygpkxNBjejzYbSz3P2fcBZ5HT1qxj9zu9N4FAzegxCYYW7g3TeHs9rQhULRyDxHnvmt",
  "key16": "48F9f61hViF6bnins6fyBN13ZT92VHKM8zNuUKKECctvfVbiebgn2Vn8TijNe8bdaGwKp8HPAZRB9oZEYw37WL6R",
  "key17": "622UoG31sNxHY2FgbokxpvKX8AGEfxWzxykdgYy65w2HDkNEeFB2TbPaSqDAXVer9Jx2twf9xErqp3zgKzVQyw8f",
  "key18": "pzPxnuTzn4KJ8VSmzeMSmkwrZ8fV2UTYqgZLhw6NXhL3rM3C2Kf4cqyej3dP9M2Ar61vPoQhdByy5bvcAgGc6m2",
  "key19": "thebYNiD74ceu3WzewdW3dLBu9kdefvKtMuYEug4z8mQdsRf3fUS6fuCfohuJUtACHNDd8kB2tfvdqdQc5PF1Vy",
  "key20": "2DsQuamYWG7jP86VgwLcKemDgFCBgNoRCvRNCdWMXN4ShKVGVoJvEdq183uXiRxon6pcpar8LqbHE3fkB1XhMECu",
  "key21": "5kFVJuDZ7XnNkBxudjRmfVjjFHkb5iMgSDwQR21BgXvUfsQiVEU2RtWVb1KMsSWhdrPG1rCMSWbWB7TmCAGzJeTV",
  "key22": "3BYCq3v6JqiyrmvjbFfdgsRGADrAqnEwwHcQ9xxaukB9fswmDiWBZQ4yu3yk7zpKdtTHxdtoRsFgDkSysgZVV1hR",
  "key23": "3GgURt9FRiPY1Sbk9D1KVEmDHjQoGRjS9dkAbP1iEdKYfPMgEvYzeVRRpLkyUopioXin1B6LiJ8aRad946BgXHew",
  "key24": "585YreF7Eq6YEQANeURB976um55pXBwxvSNbTCYNBoePZbLBsH5bhwuYevznMrZdvAjF5sPTmJDdqZSfR335Ge11",
  "key25": "2Ejybf6gobACUDjGd4hJQUS5QLqbydGynVpd7GwMKsrNv6GAK425RHySjfpYcjqFUVA2To7nQze82FJPqhLdgq5T",
  "key26": "2grmpWuUN9Tcfwr9XFUhDWZsLSLHVytn6V2sq2UWQVanDN94eu9ozFkvxF7nYHucUBajb145K4Nyka2REgkZFQjG",
  "key27": "3dz8QwnL55tZTUH2kxpK5K4amvec8TCPtSoMj637XcwLF4YhvXmZQfsXTJtfAf5cZzaAYFbwknCjtD1M7cpf4ztX",
  "key28": "aLXmPCBMXZHjJ3odUZfZzbCq96bg2ur41mDyWWtSub4uzMYbmMmvBZWevzBKERUrmMQYDjyQhtCo3G2qoKjrBwu",
  "key29": "4D3fyZZGdn1qUzqVUWv5UCpkkCKMp45KzxNLWMVfxf2QTT7PnUpDkoqyHFZgXRj64pUkTqazXDXHxMeiRZisTv9E",
  "key30": "2fqTimKN5YtM8BsffFy4wjJHdG999bN1qCLVFuTedLMUSBhBymRz9JPTNAoPYPhLcGd95wCBKt2yfci2PviDJbNN",
  "key31": "39oeMzxo3M829Quc7SGyEDVXjjwMatQxq1CVU93agBaeYhqKGkQk1GncuZWjefjGAx1E8jDTLhmUbAXJ6Cmk84fY",
  "key32": "4Ky8VA1LVHXChQ83XSiYFFNHM2JkqnZGe14qWpa96KqGZ4djUkSeab3yMk4gEdU4bpefBNmFMr7wdBVzkQr1KimU",
  "key33": "4Jw8MpchcfyWjFt3XjoGkzTYAXAbs53MN9kyXKGYijYj5FtP7ZvgC5EEqQqsmPZH6Rh2ehYmBkz1ShamLrtJLjeZ",
  "key34": "67VEe5NEgvnTZcYCXgKtRJ6J7iqUsvWioJNL8qwxePDjhpgootdQnveAygu6WuduWZ9U3DdoFxnZhmpSmDybjknF",
  "key35": "imhZAQ2gtbNvPKPmegZGe1xQuEsShFGbSvUGLU8ie2h2B5HzjagW4fFWRQvu2oZ3wKvP7fKeWAU11hanvszW3H3",
  "key36": "i2eUYMEKqVVEAP63BvEg29fYDXGPLABT4kVP2BL1BVSAmNEXARjit71DWuB424tqsNKoV6XPa2FeELCD8wwcL4H",
  "key37": "4gJTRbTgthc44or1pdQvdYCX6y8uYrGLCsjaTBwwg7SeGdGC1yMxhvH83fak3Ei5Ds4gwAdVWozQ4erdM8XTMrB4",
  "key38": "4zBFr9uHnSjEi6jM3cJ571vZuSbXvQspNaziftnSCSmKamBeWrzJLoiyftd9umKbfnYdat19T6qX3pHzbyAGkZoF"
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
