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
    "4W7rp7Fkhc1S5qWog9SS6zVSEFEsPLTag3U3eHcdowRd7R2n7k2tMaqCzDgySyaDc7aNQpjYJPFnUwfnuiNTHJqU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5edgCyzPvjUuP2DLKgNtvogqs4DyN5xWK6g7NZ7DsdrKnvhDqdXn3ooHkiHz23KzyXwvz7ioHZL9fzyswPzTJ9Fp",
  "key1": "3GncNQciEoNfa55aGp1sgycS8NZCsXsJXbPNvtyuUeKhryyW93SqAV9fc27q7RwtMEaK2NsAEF7CDatYUDGbbwrY",
  "key2": "mgVZajuftzzDY6QgcsNpLFs3DbZQ8pYqJcRKw5q97ub3QK2TrZu6dTor8cEGdLB7sM3Db5Df3btu45fErpkVSoH",
  "key3": "5ej9zCUFph3aUp9XhfMRriZMbHoenbw2H3TbPfS7AUzbZjrTsDPMVqJyFp8iCWooeya5iJWc9jQDy85n8VpWGxMK",
  "key4": "xQofvJP8MixpB9ctTi75ZpFthCXL4BNP4QqoRe73x4GjER7W1nufrc529crbGuchEB6H4t6ZDmKqU8hKS1zQvct",
  "key5": "5eTVaeRNcepiyvS3GcmZ9HiYaow7MzFkyNsaBZpzb6zPy3HRkJVZuHmYWYH9jfyMT9RHfxnqtTDPWdYzz1ernBVg",
  "key6": "KddEDpUesM12UpsrS81pYyrs2cZQTxnkSG78SMzX26Ugtj133dMg1xMkmTGMt5y4fQvFy8PXWLL5PrGKydmC7JQ",
  "key7": "67pbdQdBcoFV6vwkjcJfiP2iy6UqTsQbt5zqdqMC3mKh93QavWxpajNTQSkqZb36nnoTvmWX5JeyPxEBH596SXat",
  "key8": "4p2EUGXsdimYEL6TYVuMG11nVnMRwdP4oC87eqoD2yRzJRJeT4WdamLePscSWc9vpBo3B5ZoGF81jWYCyp8ZsU89",
  "key9": "3New6j5ibdoiUko6xiQU4UALp15jpVpjeNUEFBejHkpFpeubKyfvcxXMmJ3dPDDrp8h5CRyJrnwzWyDPapzS9oC7",
  "key10": "3AKuTSKeYfCFCKnohzQJHoRsUajDnrs5BEuK12GQKqV4ovk8RZPd9axHsPDMeuhoN9Ey8PKVbCWkup9H455aCVNx",
  "key11": "eui9AvfAbtzs8Nd1VCkXVpTRDQCVumNpNUzysdWs9r2W16ESsLZ4h2mTAXAmAXXUEUsUoXw1shnTCsegKz2xUa9",
  "key12": "4aL4qcH2petSLbCG4khkMTYXqdcWVmWX7FToQg5gZSCxQMtWjNhjH53a3beiPuD4uZWqk1kr6WQ6gtbx2fXbyA2r",
  "key13": "2LPxYaGT3Yf6kyoGZJ72d9Cq12qw3u2N6bnsMg31CgsV3cKnoB9aJ4g9nwf6hW9zkT6u8edFkaG1RhJYFqwE7Sf",
  "key14": "4xbyGdFu6EfdYVwmxbBgC4Gg4oR5RUPgtQdDqwkhiQTvBAzwT4oVasmRBLFwTtFtoLyqUYWmmhpDnRj1y2L31Y9L",
  "key15": "p2BqxkEN6wjwfwkAnfwBqckVkgMtJoayteFc8fm7C1gtkG8pQYz4937uA69Cp3dws1YB8zud1s6JJiG4E249vEn",
  "key16": "5gfEsStdUUTRqLaKGxrL6WzAvW2nBXL3KonxCZEPJrJeH4eSnmShxfyT2KBqiUBcpjLDPc9sQsgnb6HsZtkSJwFd",
  "key17": "wXaZu3a3siP8NakXkRYNtmntRQKBz1tVECaaxjDN8qP1AfH5jXaRFwJD11XWZQXH3ie1YDyWA3xtCEvZoJgaLFT",
  "key18": "3DEBTnAodUH9na2DyYkdWsudaUzuT9FYcmbJYx4jaHXZ4oKGauV3A12bkToCoE4chhzi63Ym48rKRPuCmaJ4vRy9",
  "key19": "3C9ZK6gE1E6PbmG34wqfSCWLZ2CW5wJyxvjkeyDNzqeAhfZSg2XcJUKbf3rN7H9mek743FT3yGp5ndzUYikyShK",
  "key20": "3YfaYPBqLbsyFx1MbZaEKQcyGaThEArMpsjNe72VEnrPDpsYmybpjUTKaow2pd81uoyw4pLHwC6XoXUGdSZ9DpJi",
  "key21": "5KrMgTjHxyk8aGWyuFQKDEwxU9EssLGb3kyZ71ifKxfgm6M5vCyV3sy7NLekgLpru8mcRJ3Jdtpvd7bTjFrFiPZp",
  "key22": "3dZBLMkWZ8nYZnTY7cYU4ae6aBM8Q5cDDJAHZj4x79KgbTUNj35kVRQbrPVG7iiKn9WUXngAjRbGqPdHMZsQJWA9",
  "key23": "5ZaC1KB95KU8HnTQ2q9U3AYtbHr1mNfwKh6FtDpbVKFHbmZezisujpAAthny1aW62bTvSKjpWrnNNuVXAhY5Cgmg",
  "key24": "47JNBC293vg5YVuResgLAoHHeLTmgmvvuEKCacXRErY4Vxq744vGa1rf7N3ZeBBngqF8vgQ4RDn2DEotJbrRdCBy",
  "key25": "4LJpakaD9EAzpK1znF6krNsDNkb9G7ka34PmLDAqLynwP8Db7ogYJ2Ue2A8hYi9GRZCSRh26ncnveUrEUEZY4dNE",
  "key26": "2QBhgL8ZwUrYXQoJizVZGbaPJgj3Tbq2oDpGj923wRpwr6taVE8RCEwVERXaFeaUTAK2Y2dtxK5ikT3QEh53DHgo",
  "key27": "5ac4Zmc9CCtEUAEMiNrb4q5hwm8n64j6vtTSgQTbFTP6fgvQVm6a8THfXVyvWfwxVLDn6ummtywCGPbsLhgvvZkX",
  "key28": "4UhhCSfbAJGwEZxZ8f9PdnrvJ4p6JiduPVcCDv5YiSjTE4bFtyBoxuqBKS9wp7YixFUKHdG7drQDLVTy7bHK9WWx",
  "key29": "3EUECiJ1XEbENumZ9UhEKGyVcJamhqE3LDV8mnTvuXQJhkfi4DY19H3HPm64foSuK4oxpikHGL1bUMedvVnAwZ84",
  "key30": "EgmzKr14iKMeYYxPdzKYLGk5KayYHTkXJaZYwjTcoqH1eRPB5E9FNkhHqs7N2oA61FniGR8aEK6wvBvDACkwY8Z",
  "key31": "3GHbCpX9RYujUZNuLmp4BanySG4wQfn7xCkL9fd8pnCcRW3SFcdkdYkhYKHzTfPXtXKDTNDRHvyjea4EMXqueqvV",
  "key32": "62NnF98mQbmibC4ThQy3vSHC4C5MKTLaCDvjk6CqsZ8pYcrNToVB7crj3LY5gd8NDgUbYt2kwe8SymFyPCuqDvrZ",
  "key33": "345V52ZCt776ywdpApP8vg5vG3KJd9kPLJujzRN2dFWZwPqkeVRfatfrJJ4q9Akcz6WdN1bGaxqH2wafwy6GsXa4",
  "key34": "4G2AhiQfGvSUEtyuQxqWDhKEmh2srq4TmP4hrAw4JK6iXmt8TdkdAfR9tfdhABfvXEx1iw7xWNHyiiqkakACPHvT",
  "key35": "23KPr4DaHNmQq3wxAx2VmcSwsSDqSbN2Vs7JySGYzradwAmznovU68fvoK6hozWmzkyUbFfVbxdkRehrjM9UAu5Z",
  "key36": "56WvKA7BR5UwroSxjkcdiahVujpL8bbRouZnY9QmpTivJYLsR4DXHPLFA6XuZruZYEjCiGCCRbFS2hn27Pu4uzZL",
  "key37": "4xFan87mjcggWH7JvbXNvJyDokqaumJGDgQ8jscmXEmVkXCoQub5w35AoXKpGDsiAoUGfAKYhk6qzKmkm2xeLCJX",
  "key38": "TYUN3p5m1ZNiss79JCAkBD5oDqCf9ntDenDtMDGXRsGpzFXu7zQiiBE7ityQsfSV4S19cyWfCCavexEJ6smJczr",
  "key39": "5i6aAcHdwdNYhQbekidg1VkqTEQZGHc6iVLzgnLqqu4bwLPzdfx9sqV4dT2T7eAzazFsutscj695nHvZ9GDsCybb",
  "key40": "5yh3L1Exgu247eh9nzMkx1ZbxCRf652PT75kpDSEQuhby7owZs7VxVGQENH5N2oxLKRWzuHN54bE9ue8b9DeLkWm",
  "key41": "3jLzGSGgdQ5bM7G72pLNnxW2Jpa2bX87k73HisUEx7QM3fP7khotLwPY563thA1Yc2k7yjo8F8CaRjk4tEfhRyCt",
  "key42": "3gBsYv4FZifhUpUiyn26mcAhfESwUvdN3GPgwPyzA2EuzoC7zxRDreGSDtL96FEai1AKFrcPw4HXP9edaoj7Fy3V",
  "key43": "RoEm2L3aJ3xzYSgTWiJfUikKzXFEfzDbkWhB17aTyRBXSTvFrd3VH9vMKWuMydg8FdmZ3nD2PvTAtr75fB2Wgvw",
  "key44": "3DruU2uKYRwNPFFb4SZfd2Vi3MSL9tgdscxZpmjZKUcDQNbGGyRmmjhduDnGyqGhjFUfw3bCKmKAd8W8xdweHzkr",
  "key45": "26DACa9vowE6ZirgnzBp6gJ4mDmEfi1swjK7ieevG5BYL4CX54c6MCiUqMVpQ2PiVS6dfGNrH4A1fMSXj3cpQjzD"
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
